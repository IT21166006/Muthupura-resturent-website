import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { menuItems } from "@/config/menuData";
import { getSelectableSizes, buildWhatsAppOrderUrl } from "@/lib/menuOrder";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, MessageCircle } from "lucide-react";

const formatRs = (n: number) => `Rs. ${n.toLocaleString("en-LK")}`;

const OrderPage = () => {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("item")?.trim() ?? "";

  const item = useMemo(() => menuItems.find((m) => m.id === itemId), [itemId]);

  const selectable = useMemo(() => (item ? getSelectableSizes(item.sizes) : []), [item]);

  const [selectedKey, setSelectedKey] = useState("0");

  useEffect(() => {
    setSelectedKey("0");
  }, [itemId]);

  const selectedSize = useMemo(() => {
    if (!item) return null;
    if (selectable.length === 0) {
      return item.sizes[0] ?? null;
    }
    const idx = Math.min(Number.parseInt(selectedKey, 10) || 0, selectable.length - 1);
    return selectable[idx] ?? selectable[0];
  }, [item, selectable, selectedKey]);

  const sendWhatsAppOrder = () => {
    if (!item || !selectedSize) return;

    const lines = [
      `Hello! I would like to place an order from *${RESTAURANT_CONFIG.name}*.`,
      "",
      `*Item:* ${item.name}`,
      `*Size:* ${selectedSize.label}`,
      `*Price:* ${formatRs(selectedSize.price)}`,
      "",
      "_Sent from the website order page_",
    ];

    const url = buildWhatsAppOrderUrl(RESTAURANT_CONFIG.orderWhatsAppNumber, lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!itemId || !item) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-lg text-center">
            <h1 className="text-2xl font-heading font-bold mb-3">Item not found</h1>
            <p className="text-muted-foreground mb-6">Open an item from the menu and tap Order again.</p>
            <Button asChild>
              <Link to="/menu">Back to menu</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const showSizePicker = selectable.length > 1;
  const sectionTitle =
    selectable.length === 2 &&
    selectable.every((s) => ["medium", "large"].includes(s.label.trim().toLowerCase()))
      ? "Choose size"
      : "Choose portion";

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-lg">
          <Button variant="ghost" className="mb-6 gap-2 -ml-2 text-muted-foreground" asChild>
            <Link to="/menu">
              <ArrowLeft className="h-4 w-4" />
              Back to menu
            </Link>
          </Button>

          <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] overflow-hidden">
            <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
              <img src={item.image} alt="" className="h-full w-full object-cover" width={800} height={500} />
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Your order</p>
                <h1 className="text-2xl font-heading font-bold leading-tight">{item.name}</h1>
              </div>

              {showSizePicker ? (
                <div className="space-y-3">
                  <Label className="text-base">{sectionTitle}</Label>
                  <RadioGroup value={selectedKey} onValueChange={setSelectedKey} className="gap-3">
                    {selectable.map((s, i) => (
                      <label
                        key={`${s.label}-${s.price}`}
                        htmlFor={`order-size-${i}`}
                        className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border/70 bg-muted/30 px-4 py-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={String(i)} id={`order-size-${i}`} />
                          <span className="font-medium text-foreground">{s.label}</span>
                        </div>
                        <span className="font-bold tabular-nums text-primary">{formatRs(s.price)}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                <div className="rounded-xl border border-border/60 bg-muted/40 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Price</p>
                  <p className="text-xl font-bold tabular-nums text-primary">
                    {selectedSize ? formatRs(selectedSize.price) : "—"}
                  </p>
                  {item.sizes.length === 1 && (
                    <p className="text-sm text-muted-foreground mt-1">Portion: {item.sizes[0].label}</p>
                  )}
                </div>
              )}

              {selectedSize && showSizePicker && (
                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="text-sm font-medium text-muted-foreground">Total</span>
                  <span className="text-xl font-bold tabular-nums text-primary">{formatRs(selectedSize.price)}</span>
                </div>
              )}

              <Button
                type="button"
                size="lg"
                className="w-full gap-2 rounded-xl py-6 text-base font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white"
                onClick={sendWhatsAppOrder}
                disabled={!selectedSize}
              >
                <MessageCircle className="h-5 w-5" />
                Order now via WhatsApp
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Opens WhatsApp to <span className="font-medium text-foreground">+{RESTAURANT_CONFIG.orderWhatsAppNumber}</span> with your item details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderPage;
