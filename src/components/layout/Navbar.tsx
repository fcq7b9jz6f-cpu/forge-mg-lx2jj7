import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "حياتها", href: "/about" },
  { label: "التراث", href: "/legacy" },
  { label: "معرض الصور", href: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="font-heading text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          صوت أم كلثوم
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm transition-colors relative py-1 ${
                location.pathname === l.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {location.pathname === l.href && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          ))}
          <Button to="/about" size="sm">
            اكتشف حياتها
          </Button>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`text-base py-2 ${
                  location.pathname === l.href
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button to="/about" size="sm" className="mt-2">
              اكتشف حياتها
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
