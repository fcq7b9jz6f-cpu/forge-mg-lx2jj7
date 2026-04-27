import { Helmet } from "react-helmet-async";
import { ChevronLeft, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const galleryItems = [
  {
    src: "https://images.pexels.com/photos/7715781/pexels-photo-7715781.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "على المسرح",
    caption: "لحظات من الأداء المسرحي الأسطوري",
  },
  {
    src: "https://images.pexels.com/photos/7086729/pexels-photo-7086729.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "في الاستوديو",
    caption: "لحظات التسجيل خلف الكواليس",
  },
  {
    src: "https://images.pexels.com/photos/7086300/pexels-photo-7086300.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "مع الأوركسترا",
    caption: "التعاون مع أعظم الملحنين",
  },
  {
    src: "https://images.pexels.com/photos/7087168/pexels-photo-7087168.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "صوتٌ يملأ المكان",
    caption: "الحفلات التي لا تُنسى",
  },
  {
    src: "https://images.pexels.com/photos/7087167/pexels-photo-7087167.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "عاطفة نقية",
    caption: "كل أغنية كانت قصة حب",
  },
  {
    src: "https://images.pexels.com/photos/7086286/pexels-photo-7086286.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "لحظات خاصة",
    caption: "من وراء الكواليس",
  },
  {
    src: "https://images.pexels.com/photos/7087162/pexels-photo-7087162.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "التسجيل الكلاسيكي",
    caption: "عصر الذهبي للإذاعة",
  },
  {
    src: "https://images.pexels.com/photos/7086291/pexels-photo-7086291.jpeg?auto=format&fit=crop&w=800&q=80",
    title: "مع المغنين",
    caption: "تأثيرها على الأجيال",
  },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>معرض الصور | صوت أم كلثوم</title>
        <meta name="description" content="معرض صور أم كلثوم - لحظات نادرة من حياة كوكب الشرق" />
      </Helmet>

      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7087168/pexels-photo-7087168.jpeg?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 container mx-auto px-4" dir="rtl">
          <AnimatedSection type="fadeUp">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">لحظات خالدة</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95]">
              معرض الصور
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl font-sans">
              صور تعبّر عن روح العظمة والفن الأصيل
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryItems.map((item, i) => (
              <AnimatedSection
                key={item.title}
                type={i % 3 === 0 ? "slideLeft" : i % 3 === 1 ? "slideRight" : "fadeUp"}
                delay={i * 0.06}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/30"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 left-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm font-sans">{item.caption}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection type="fadeUp">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              اكتشف المزيد عن حياتها
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/about" size="lg">
                <ChevronLeft size={18} className="ml-2" />
                حياتها
              </Button>
              <Button to="/legacy" variant="outline" size="lg">
                <ChevronLeft size={18} className="ml-2" />
                إرثها الموسيقي
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
