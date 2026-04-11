import type { MenuSizePrice } from "@/config/restaurant";

function normLabel(label: string): string {
  return label.trim().toLowerCase();
}

/**
 * If the item has both Medium and Large, only those two are selectable.
 * Otherwise, if there are multiple sizes, all of them are shown.
 * If there is only one size, returns [] (no selector — use that single price).
 */
export function getSelectableSizes(sizes: MenuSizePrice[]): MenuSizePrice[] {
  if (sizes.length <= 1) return [];

  const medium = sizes.find((s) => normLabel(s.label) === "medium");
  const large = sizes.find((s) => normLabel(s.label) === "large");

  if (medium && large) {
    return [medium, large];
  }

  return [...sizes];
}

export function buildWhatsAppOrderUrl(phoneDigits: string, message: string): string {
  const cleaned = phoneDigits.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
