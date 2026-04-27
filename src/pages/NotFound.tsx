import { Link } from "react-router-dom";
import { ChevronLeft, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <Music className="w-16 h-16 text-primary/40 mx-auto mb-6" />
        <div className="font-heading text-8xl font-bold text-foreground tracking-tight leading-none">
          404
        </div>
        <p className="mt-6 text-2xl font-heading font-semibold text-foreground">
          هذه الصفحة غير موجودة
        </p>
        <p className="mt-3 text-muted-foreground font-sans">
          ربما انتهت الأغنية هنا... لكنك دائماً تستطيع العودة للبداية
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-[10px] font-medium hover:opacity-90 transition-opacity min-h-[44px]"
        >
          <ChevronLeft size={18} className="ml-2" />
          العودة للرئيسية
        </Link>
      </motion.div>
    </main>
  );
}
