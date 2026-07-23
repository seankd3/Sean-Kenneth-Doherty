/**
 * Real form delivery for static hosting.
 * Primary: FormSubmit.co → email (no API key; one-time inbox confirmation).
 * Fallback: optional Web3Forms access key via NEXT_PUBLIC_WEB3FORMS_KEY.
 */
import { siteConfig } from '@/lib/content';
import {
  buildInquiryBody,
  buildInquirySubject,
  type ContactInquiry,
} from '@/lib/contact-inquiry';

export type SubmitResult =
  | { ok: true; provider: string; message: string }
  | { ok: false; provider: string; message: string; needsActivation?: boolean };

function web3formsKey(): string | undefined {
  if (typeof process === 'undefined') return undefined;
  return process.env.NEXT_PUBLIC_WEB3FORMS_KEY || undefined;
}

export async function submitInquiry(
  inquiry: ContactInquiry,
  opts?: { honeypot?: string }
): Promise<SubmitResult> {
  // Bot trap filled → pretend success
  if (opts?.honeypot && opts.honeypot.trim()) {
    return {
      ok: true,
      provider: 'honeypot',
      message: 'Thanks — your inquiry has been received.',
    };
  }

  const subject = buildInquirySubject(inquiry);
  const message = buildInquiryBody(inquiry);
  const name = `${inquiry.firstName} ${inquiry.lastName}`.trim();
  const key = web3formsKey();

  if (key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: key,
          subject,
          name,
          email: inquiry.email,
          phone: inquiry.phone || '',
          event_type: inquiry.eventType || '',
          event_date: inquiry.date || '',
          referral: inquiry.referralSource || '',
          message,
          from_name: 'seankennethdoherty.com',
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };
      if (res.ok && data.success !== false) {
        return {
          ok: true,
          provider: 'web3forms',
          message:
            data.message ||
            "Thanks — your inquiry was sent. I'll get back to you as soon as I can.",
        };
      }
      // fall through to FormSubmit
    } catch {
      // fall through
    }
  }

  // FormSubmit — delivers to siteConfig.email; first use needs email confirmation
  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email: inquiry.email,
          phone: inquiry.phone || '',
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          _replyto: inquiry.email,
          eventType: inquiry.eventType || '',
          date: inquiry.date || '',
          referralSource: inquiry.referralSource || '',
          message,
        }),
      }
    );

    const data = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };

    if (res.ok && (data.success === true || data.success === 'true' || !data.message?.toLowerCase().includes('error'))) {
      // FormSubmit sometimes returns 200 with activation notice
      const msg = (data.message || '').toLowerCase();
      if (msg.includes('activate') || msg.includes('confirm')) {
        return {
          ok: true,
          provider: 'formsubmit',
          needsActivation: true,
          message:
            "Almost there — check your email (SeanDohertyPhotos@gmail.com) for a one-time FormSubmit confirmation link, then inquiries will arrive automatically.",
        };
      }
      return {
        ok: true,
        provider: 'formsubmit',
        message:
          "Thanks — your inquiry was sent. I'll get back to you as soon as I can.",
      };
    }

    return {
      ok: false,
      provider: 'formsubmit',
      message:
        data.message ||
        `Could not send right now. Email me directly at ${siteConfig.email}.`,
    };
  } catch {
    return {
      ok: false,
      provider: 'formsubmit',
      message: `Network error sending the form. Email me directly at ${siteConfig.email}.`,
    };
  }
}
