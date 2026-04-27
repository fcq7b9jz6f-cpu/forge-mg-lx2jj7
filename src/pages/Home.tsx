import { Music, Heart, Star, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const songs = [
  { title: "ألف ليلة وليلة", year: "1969", length: "38 دقيقة" },
  { title: "الأطلال", year: "1966", length: "48 دقيقة" },
  { title: "فكروني", year: "1964", length: "42 دقيقة" },
  { title: "أنت عمري", year: "1964", length: "35 دقيقة" },
  { title: "الأمل", year: "1962", length: "28 دقيقة" },
  { title: "سيرة الحب", year: "1964", length: "33 دقيقة" },
];

const stats = [
  { icon: Music, label: "أغنية مسجلة", value: "300+" },
  { icon: Heart, label: "سنة من الفن", value: "50+" },
  { icon: Star, label: "حفلة تاريخية", value: "100+" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7087168/pexels-photo-7087168.jpeg?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto" dir="rtl">
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
            كوكب الشرق
          </p>
          <h1 className="font-heading text-7xl md:text-9xl lg:text-[11rem] font-bold leading-[0.9] tracking-[-0.04em] text-foreground">
            أم كلثوم
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
            صوتٌ يملأ السماء، حكايةٌ لا تنتهي. من ربوع الدلتا إلى قلب كل عربي، رحلة عظيمة في خمسين عاماً من الفن.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/about" size="lg">
              <ChevronLeft size={18} className="ml-2" />
              اكتشف حياتها
            </Button>
            <Button to="/legacy" variant="outline" size="lg">
              <ChevronLeft size={18} className="ml-2" />
              إرثها الموسيقي
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection type="scaleIn">
            <div className="border border-border/50 rounded-2xl p-8 md:p-12 bg-secondary/20 backdrop-blur-sm text-center">
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed text-foreground">
                "إنني لا أغني إلا ما يُؤثر فيني أولاً"
              </blockquote>
              <p className="mt-6 text-muted-foreground font-sans text-lg">— أم كلثوم</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label} type="scaleIn" className="border border-border/50 rounded-2xl p-8 text-center bg-secondary/10 hover:bg-secondary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-2 text-muted-foreground font-sans">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Songs Section */}
      <section className="py-24 md:py-32 px-4" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection type="fadeUp" className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">أشهر الأعمال</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              جواهرها الموسيقية
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-sans">
              اختارت أم كلثوم كلماتها وألحانها بعناية شديدة لتعكس عمق مشاعرها وإخلاصها للفن
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song, i) => (
              <AnimatedSection
                key={song.title}
                type={i % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={i * 0.1}
                className="group border border-border/50 rounded-2xl p-6 bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{song.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans mt-1">{song.year}</p>
                  </div>
                  <Music className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <div className="w-full h-px bg-border/50 mb-4" />
                <p className="text-muted-foreground text-sm font-sans">مدة الأغنية: {song.length}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection type="fadeUp">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              هل تريد معرفة المزيد؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-sans">
              غوص في تفاصيل حياة كوكب الشرق من طفولتها البسيطة في قرية طماي الزهايرة حتى قمة الشهرة
            </p>
            <Button to="/about" size="lg">
              <ChevronLeft size={18} className="ml-2" />
              اقرأ سيرتها الكاملة
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
