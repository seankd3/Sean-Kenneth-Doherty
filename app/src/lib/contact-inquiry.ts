export interface ContactInquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  referralSource: string;
  message: string;
}

export function buildInquirySubject(inquiry: ContactInquiry): string {
  const inquiryType = inquiry.eventType || 'General';
  const name = `${inquiry.firstName} ${inquiry.lastName}`.trim();
  return `Photography inquiry - ${inquiryType}${name ? ` - ${name}` : ''}`;
}

export function buildInquiryBody(inquiry: ContactInquiry): string {
  return [
    `Name: ${inquiry.firstName} ${inquiry.lastName}`.trim(),
    `Email: ${inquiry.email}`,
    inquiry.phone ? `Phone: ${inquiry.phone}` : null,
    inquiry.eventType ? `Event type: ${inquiry.eventType}` : null,
    inquiry.date ? `Date: ${inquiry.date}` : null,
    inquiry.referralSource ? `Heard about me via: ${inquiry.referralSource}` : null,
    '',
    inquiry.message,
  ]
    .filter((line): line is string => line !== null)
    .join('\n');
}

export function buildMailtoUrl(email: string, inquiry: ContactInquiry): string {
  const subject = buildInquirySubject(inquiry);
  const body = buildInquiryBody(inquiry);
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
