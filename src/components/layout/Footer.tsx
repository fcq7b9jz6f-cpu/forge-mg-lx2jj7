import { Link } from "react-router-dom";
import { Music } from "lucide-react";

const SITE_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "حياتها", href: "/about" },
  { label: "التراث", href: "/legacy" },
  { label: "معرض الصور", href: "/gallery" },
];

const CONTENT_LINKS = [
  { label: "سيرتها الذاتية", href: "/about" },
  { label: "أشهر أغانيها", href: "/legacy" },
  { label: "الحفلات التاريخية", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <Music className="w-6 h-6 text-primary" />
            <span className="font-heading text-2xl font-bold text-foreground">
              صوت أم كلثوم
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed font-sans">
            كوكب الشرق — تخليد ذكرى سيدة الغناء العربي. موقع يحكي سيرة حياتها وإرثها الموسيقي الخالد.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">الموقع</h4>
          <ul className="space-y-2.5">
            {SITE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">المحتوى</h4>
          <ul className="space-y-2.5">
            {CONTENT_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 border-t border-border/30 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2 font-sans">
        <span>© 2026 صوت أم كلثوم — جميع الحقوق محفوظة</span>
        <span>بني بحب باستخدام Megsy AI</span>
      </div>
    </footer>
  );
}
