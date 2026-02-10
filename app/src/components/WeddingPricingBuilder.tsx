'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, ChevronUp, Minus, Plus } from 'lucide-react';
import {
  weddingPackages,
  weddingAddOns,
  pricingConfig,
  formatPrice,
  type WeddingPackage,
  type WeddingAddOn,
} from '@/lib/content/wedding-pricing';

function buildContactUrl(
  packageId: string,
  addOnIds: Set<string>,
  quantities: Record<string, number>,
  payInFull: boolean,
): string {
  const params = new URLSearchParams();
  params.set('package', packageId);
  if (addOnIds.size > 0) {
    params.set('addons', Array.from(addOnIds).join(','));
  }
  for (const [id, qty] of Object.entries(quantities)) {
    if (addOnIds.has(id) && qty > 1) {
      params.set(`qty_${id}`, String(qty));
    }
  }
  if (payInFull) {
    params.set('payInFull', '1');
  }
  return `/contact?${params.toString()}`;
}

export default function WeddingPricingBuilder() {
  const [selectedPackageId, setSelectedPackageId] = useState(weddingPackages[0].id);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<Set<string>>(new Set());
  const [addOnQuantities, setAddOnQuantities] = useState<Record<string, number>>({});
  const [payInFull, setPayInFull] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const packageGroupRef = useRef<HTMLDivElement>(null);

  const selectedPackage = weddingPackages.find((p) => p.id === selectedPackageId)!;

  // When switching packages, remove add-ons that are now included
  const selectPackage = useCallback((pkgId: string) => {
    const pkg = weddingPackages.find((p) => p.id === pkgId);
    if (!pkg) return;
    setSelectedPackageId(pkgId);
    setSelectedAddOnIds((prev) => {
      const next = new Set(prev);
      for (const id of pkg.includedAddOns) {
        next.delete(id);
      }
      return next;
    });
  }, []);

  const toggleAddOn = useCallback((addOnId: string) => {
    setSelectedAddOnIds((prev) => {
      const next = new Set(prev);
      if (next.has(addOnId)) {
        next.delete(addOnId);
      } else {
        next.add(addOnId);
      }
      return next;
    });
  }, []);

  const setQuantity = useCallback((addOnId: string, qty: number) => {
    setAddOnQuantities((prev) => ({ ...prev, [addOnId]: qty }));
  }, []);

  // Keyboard arrow navigation for packages
  useEffect(() => {
    const group = packageGroupRef.current;
    if (!group) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      const items = Array.from(group.querySelectorAll<HTMLButtonElement>('[role="radio"]'));
      const currentIndex = items.findIndex((el) => el.getAttribute('aria-checked') === 'true');
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % items.length;
      } else {
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      }
      e.preventDefault();
      items[nextIndex].focus();
      const pkgId = items[nextIndex].getAttribute('data-pkg-id');
      if (pkgId) selectPackage(pkgId);
    };

    group.addEventListener('keydown', handleKeyDown);
    return () => group.removeEventListener('keydown', handleKeyDown);
  }, [selectPackage]);

  // Calculate totals
  const addOnsTotal = weddingAddOns.reduce((sum, addon) => {
    if (!selectedAddOnIds.has(addon.id)) return sum;
    const qty = addon.hasQuantity ? (addOnQuantities[addon.id] || 1) : 1;
    return sum + addon.price * qty;
  }, 0);

  const subtotal = selectedPackage.price + addOnsTotal;
  const discount = payInFull ? pricingConfig.payInFullDiscount : 0;
  const total = subtotal - discount;

  // Payment plan: 25% retainer, remainder spread over months until wedding
  const retainer = Math.round(total * pricingConfig.retainerPercent / 100);
  const remainder = total - retainer;
  const monthlyPayments = remainder > 0 ? Math.max(1, Math.min(12, Math.round(remainder / 400))) : 0;
  const perMonth = monthlyPayments > 0 ? Math.round(remainder / monthlyPayments) : 0;

  // Active selected add-ons for summary display
  const activeAddOns = weddingAddOns.filter((a) => selectedAddOnIds.has(a.id));

  const contactUrl = buildContactUrl(selectedPackageId, selectedAddOnIds, addOnQuantities, payInFull);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Investment</p>
          <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
            Build Your Collection
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            Choose a base package, add what you need, and see your total instantly.
            Every collection includes professional editing, a private online gallery
            with full-resolution downloads, and a print release.
          </p>
        </motion.div>

        {/* Desktop: 2/3 + 1/3 layout | Mobile: single column */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Column: Packages + Add-ons */}
          <div className="lg:col-span-2">
            {/* Package Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4">1. Choose Your Package</p>
              <div
                ref={packageGroupRef}
                role="radiogroup"
                aria-label="Wedding packages"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
              >
                {weddingPackages.map((pkg, index) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    selected={pkg.id === selectedPackageId}
                    onSelect={selectPackage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Add-On Toggles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4">2. Enhance Your Collection</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {weddingAddOns.map((addon) => (
                  <AddOnToggle
                    key={addon.id}
                    addon={addon}
                    included={selectedPackage.includedAddOns.includes(addon.id)}
                    selected={selectedAddOnIds.has(addon.id)}
                    quantity={addOnQuantities[addon.id] || 1}
                    onToggle={toggleAddOn}
                    onQuantityChange={setQuantity}
                  />
                ))}
              </div>
            </motion.div>

            {/* Destination & Custom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#2a2a2a] bg-[#111111] p-10 md:p-14 text-center mb-12 lg:mb-0"
            >
              <h3 className="font-wedding-display text-3xl md:text-4xl text-white mb-4">
                Destination &amp; Custom
              </h3>
              <p className="text-[#666] max-w-xl mx-auto mb-8 text-sm">
                Multi-day celebrations, destination weddings, or need something entirely bespoke?
                I&apos;ll build a custom collection around your timeline and vision. Travel within Texas is always included.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Sticky Summary (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <SummaryCard
                selectedPackage={selectedPackage}
                activeAddOns={activeAddOns}
                addOnQuantities={addOnQuantities}
                payInFull={payInFull}
                onTogglePayInFull={() => setPayInFull((p) => !p)}
                subtotal={subtotal}
                discount={discount}
                total={total}
                retainer={retainer}
                perMonth={perMonth}
                monthlyPayments={monthlyPayments}
                contactUrl={contactUrl}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Summary Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30">
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] border-t border-[#2a2a2a] overflow-hidden"
            >
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                <SummaryBreakdown
                  selectedPackage={selectedPackage}
                  activeAddOns={activeAddOns}
                  addOnQuantities={addOnQuantities}
                  payInFull={payInFull}
                  onTogglePayInFull={() => setPayInFull((p) => !p)}
                  subtotal={subtotal}
                  discount={discount}
                  total={total}
                  retainer={retainer}
                  perMonth={perMonth}
                  monthlyPayments={monthlyPayments}
                  contactUrl={contactUrl}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-[#0a0a0a] border-t border-[#2a2a2a] px-4 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileExpanded((e) => !e)}
            className="flex items-center gap-2"
          >
            <span className="text-white font-medium" aria-live="polite">
              {formatPrice(total)}
            </span>
            <motion.span
              animate={{ rotate: mobileExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp size={16} className="text-[#a0a0a0]" />
            </motion.span>
            <span className="text-[#666] text-sm">
              {payInFull ? 'pay in full' : `${formatPrice(retainer)} retainer`}
            </span>
          </button>
          <Link
            href={contactUrl}
            className="bg-[#c9a962] text-[#0a0a0a] px-5 py-2.5 font-medium tracking-wider uppercase text-xs hover:bg-white transition-colors duration-300"
          >
            Check Availability
          </Link>
        </div>
      </div>

      {/* Spacer for mobile fixed bar */}
      <div className="h-16 lg:hidden" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PackageCard({
  pkg,
  selected,
  onSelect,
  index,
}: {
  pkg: WeddingPackage;
  selected: boolean;
  onSelect: (id: string) => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={selected}
      data-pkg-id={pkg.id}
      tabIndex={selected ? 0 : -1}
      onClick={() => onSelect(pkg.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative text-left p-5 border-2 transition-all duration-300 ${
        selected
          ? 'border-[#c9a962] bg-[#c9a962]/5'
          : 'border-[#2a2a2a] bg-[#111111] hover:border-[#444]'
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 right-4 bg-[#c9a962] text-[#0a0a0a] px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase">
          Best Value
        </span>
      )}

      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-wedding-display text-xl text-white">{pkg.name}</h3>
          <p className="text-[#666] text-xs mt-0.5">{pkg.subtitle}</p>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
            selected ? 'border-[#c9a962] bg-[#c9a962]' : 'border-[#444]'
          }`}
        >
          {selected && <Check size={12} className="text-[#0a0a0a]" />}
        </div>
      </div>

      <p className="text-2xl font-bold text-white mb-1">{formatPrice(pkg.price)}</p>
      <p className="text-[#a0a0a0] text-xs mb-3">
        {pkg.hours} hours &middot; {pkg.photoCount} photos
      </p>

      <ul className="space-y-1.5">
        {pkg.features.slice(0, 5).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={12} className="text-[#c9a962] mt-0.5 flex-shrink-0" />
            <span className="text-[#a0a0a0] text-xs leading-tight">{f}</span>
          </li>
        ))}
        {pkg.features.length > 5 && (
          <li className="text-[#666] text-xs pl-5">
            +{pkg.features.length - 5} more included
          </li>
        )}
      </ul>
    </motion.button>
  );
}

function AddOnToggle({
  addon,
  included,
  selected,
  quantity,
  onToggle,
  onQuantityChange,
}: {
  addon: WeddingAddOn;
  included: boolean;
  selected: boolean;
  quantity: number;
  onToggle: (id: string) => void;
  onQuantityChange: (id: string, qty: number) => void;
}) {
  const active = selected && !included;

  return (
    <div
      className={`flex items-center justify-between p-3.5 border transition-all duration-200 ${
        included
          ? 'border-[#2a2a2a] bg-[#0a0a0a] opacity-60'
          : active
            ? 'border-[#c9a962] bg-[#c9a962]/5'
            : 'border-[#2a2a2a] bg-[#111111] hover:border-[#444]'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          role="switch"
          aria-checked={included || active}
          aria-label={addon.name}
          disabled={included}
          onClick={() => onToggle(addon.id)}
          className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
            included
              ? 'border-[#c9a962]/40 bg-[#c9a962]/20'
              : active
                ? 'border-[#c9a962] bg-[#c9a962]'
                : 'border-[#444] hover:border-[#666]'
          }`}
        >
          {(included || active) && <Check size={12} className={included ? 'text-[#c9a962]/60' : 'text-[#0a0a0a]'} />}
        </button>
        <div className="min-w-0">
          <p className={`text-sm truncate ${included ? 'text-[#666]' : 'text-[#a0a0a0]'}`}>
            {addon.name}
          </p>
          {included && (
            <span className="text-[#c9a962]/60 text-[10px] tracking-wider uppercase">Included</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        {addon.hasQuantity && active && (
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={`Decrease ${addon.name} quantity`}
              onClick={(e) => {
                e.stopPropagation();
                if (quantity > 1) onQuantityChange(addon.id, quantity - 1);
              }}
              className="w-6 h-6 border border-[#444] flex items-center justify-center text-[#a0a0a0] hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              <Minus size={10} />
            </button>
            <span className="text-white text-xs w-4 text-center">{quantity}</span>
            <button
              type="button"
              aria-label={`Increase ${addon.name} quantity`}
              onClick={(e) => {
                e.stopPropagation();
                if (quantity < (addon.maxQuantity || 4)) onQuantityChange(addon.id, quantity + 1);
              }}
              className="w-6 h-6 border border-[#444] flex items-center justify-center text-[#a0a0a0] hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              <Plus size={10} />
            </button>
          </div>
        )}
        <span className={`text-sm font-medium ${included ? 'text-[#666] line-through' : 'text-white'}`}>
          {formatPrice(addon.price)}
        </span>
      </div>
    </div>
  );
}

function SummaryCard(props: SummaryProps) {
  return (
    <div className="border border-[#2a2a2a] bg-[#111111] p-6">
      <h3 className="font-wedding-display text-2xl text-white mb-6">Your Collection</h3>
      <SummaryBreakdown {...props} />
    </div>
  );
}

interface SummaryProps {
  selectedPackage: WeddingPackage;
  activeAddOns: WeddingAddOn[];
  addOnQuantities: Record<string, number>;
  payInFull: boolean;
  onTogglePayInFull: () => void;
  subtotal: number;
  discount: number;
  total: number;
  retainer: number;
  perMonth: number;
  monthlyPayments: number;
  contactUrl: string;
}

function SummaryBreakdown({
  selectedPackage,
  activeAddOns,
  addOnQuantities,
  payInFull,
  onTogglePayInFull,
  subtotal,
  discount,
  total,
  retainer,
  perMonth,
  monthlyPayments,
  contactUrl,
}: SummaryProps) {
  return (
    <div>
      {/* Package line */}
      <div className="flex justify-between items-start mb-1">
        <span className="text-[#a0a0a0] text-sm">{selectedPackage.name}</span>
        <span className="text-white text-sm font-medium">{formatPrice(selectedPackage.price)}</span>
      </div>
      <p className="text-[#666] text-xs mb-4">
        {selectedPackage.hours} hrs &middot; {selectedPackage.photoCount} photos
      </p>

      {/* Add-ons */}
      {activeAddOns.length > 0 && (
        <div className="border-t border-[#1a1a1a] pt-3 mb-4 space-y-2">
          {activeAddOns.map((addon) => {
            const qty = addon.hasQuantity ? (addOnQuantities[addon.id] || 1) : 1;
            return (
              <div key={addon.id} className="flex justify-between text-sm">
                <span className="text-[#a0a0a0]">
                  {addon.name}
                  {qty > 1 && <span className="text-[#666]"> &times;{qty}</span>}
                </span>
                <span className="text-white font-medium">{formatPrice(addon.price * qty)}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Subtotal */}
      {discount > 0 && (
        <div className="border-t border-[#1a1a1a] pt-3 mb-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#a0a0a0]">Subtotal</span>
            <span className="text-white">{formatPrice(subtotal)}</span>
          </div>
        </div>
      )}

      {/* Pay-in-full toggle */}
      <div className="border-t border-[#1a1a1a] pt-3 mb-4">
        <button
          type="button"
          onClick={onTogglePayInFull}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-[18px] rounded-full relative transition-colors duration-200 ${
                payInFull ? 'bg-[#c9a962]' : 'bg-[#333]'
              }`}
            >
              <motion.div
                className="absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white"
                animate={{ left: payInFull ? 14 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </div>
            <span className="text-[#a0a0a0] text-sm group-hover:text-white transition-colors">Pay in full</span>
          </div>
          <span className={`text-xs font-medium tracking-wider uppercase px-2 py-0.5 transition-colors ${
            payInFull ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-[#1a1a1a] text-[#666]'
          }`}>
            Save {formatPrice(pricingConfig.payInFullDiscount)}
          </span>
        </button>
        {discount > 0 && (
          <div className="flex justify-between text-sm mt-2">
            <span className="text-[#c9a962]">Pay-in-full discount</span>
            <span className="text-[#c9a962]">-{formatPrice(discount)}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-[#c9a962]/30 pt-4 mb-4">
        <div className="flex justify-between items-baseline">
          <span className="text-white font-medium">Total</span>
          <span className="text-white text-2xl font-bold" aria-live="polite">
            {formatPrice(total)}
          </span>
        </div>
        {!payInFull && monthlyPayments > 0 && (
          <p className="text-[#666] text-xs mt-1 text-right">
            {formatPrice(retainer)} retainer + {formatPrice(perMonth)}/mo &times; {monthlyPayments}
          </p>
        )}
      </div>

      {/* CTA */}
      <Link
        href={contactUrl}
        className="flex items-center justify-center gap-2 w-full bg-[#c9a962] text-[#0a0a0a] py-3.5 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
      >
        <span>Check Availability</span>
        <ArrowRight size={16} />
      </Link>

      <p className="text-[#666] text-[10px] text-center mt-3 leading-relaxed">
        Flexible payment plans on all collections.
        <br />
        25% retainer to book, remainder before your date.
      </p>
    </div>
  );
}
