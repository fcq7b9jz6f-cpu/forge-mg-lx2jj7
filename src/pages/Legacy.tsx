import { Helmet } from "react-helmet-async";
import { Music, Award, Globe, Users, Heart, Mic2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const achievements = [
  { icon: Award, title: "وسام الجمهورية", description: "حصلت على أرفع الأوسمة في مصر والوطن العربي تقديراً لإسهاماتها في الفن" },
  { icon: Globe, title: "سفيرة الفن العربي", description: "مثلت مصر والعالم العربي في المحافل الدولية ونشرت الفن العربي في كل ركن من العالم" },
  { icon: Users, title: "ملايين المعجبين", description: "جمعت حفلاتها أعداداً غير مسبوقة، وكان يُنقل صوتها إلى كل بيت عربي عبر الإذاعة" },
  { icon: Heart, title: "أغاني خالدة", description: "تركت وراءها مئات الأغاني التي لا تزال تُغنى وتحفظها الأجيال حتى اليوم" },
];

const composers = [
  { name: "أحمد شفيق كامل", role: "شاعر", works: "ألف ليلة وليلة - الأطلال - فكروني" },
  { name: "بليغ حمدي", role: "ملحن", works: "حيرت قلبي معاك - أمل حياتي - فات الميعاد" },
  { name: "محمد الموجي", role: "ملحن", works: "أنت عمري - سيرة الحب - أمل" },
  { name: "رياض السنباطي", role: "ملحن", works: "الأطلال - رباعيات الخيام - أول همسة" },
];

const influence = [
  "أثرت أم كلثوم في جيلٍ كامل من المطربين العرب الذين تعلموا من أسلوبها وأدائها.",
  "كان صوتها جزءاً لا يتجزأ من الهوية الثقافية العربية والمصرية خاصة.",
  "ساهمت في تطوير الأغنية العربية من أغنية قصيرة إلى مقطوعة موسيقية مطولة ذات عمق.",
  "تركت بصمتها في السينما المصرية من خلال أفلامها التي لا تزال مرجعاً فنياً مهماً.",
  "أقيمت على شرفها جوائز ومهرجانات دولية لا تزال تكرم ذكراها حتى اليوم.",
];

export default function Legacy() {
  return (
    <>
      <Helmet>
        <title>التراث | صوت أم كلثوم</title>
        <meta name="description" content="إرث أم كلثوم الموسيقي وإنجازاتها وتأثيرها على الفن العربي عبر الأجيال" />
      </Helmet>

      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7086729/pexels-photo-7086729.jpeg?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 container mx-auto px-4" dir="rtl">
          <AnimatedSection type="fadeUp">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">إرث فني خالد</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95]">
              إرث كوكب الشرق
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl font-sans">
              ما تركته أم كلثوم يتجاوز الأغاني إلى قيمة ثقافية وإنسانية لا تُقدر بثمن
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection type="fadeUp" className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">إنجازاتها</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">شهادات العظمة</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <AnimatedSection
                key={item.title}
                type={i % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={i * 0.1}
                className="border border-border/50 rounded-2xl p-8 bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Composers */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection type="fadeUp" className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-sans">شركاء النجاح</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">عظماء تعاونت معهم</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {composers.map((composer, i) => (
              <AnimatedSection
                key={composer.name}
                type="scaleIn"
                delay={i * 0.1}
                className="border border-border/50 rounded-2xl p-6 bg-secondary/5 hover:bg-secondary/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Mic2 className="w-5 h-5 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">{composer.name}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">{composer.role}</span>
                </div>
                <p className="text-muted-foreground font-sans text-sm">{composer.works}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection type="fadeUp" className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">التأثير الثقافي</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">بصمتها في الذاكرة</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {influence.map((text, i) => (
              <AnimatedSection
                key={i}
                type={i % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={i * 0.08}
                className="flex items-start gap-4 border border-border/30 rounded-xl p-5 bg-secondary/5"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                <p className="text-foreground/90 font-sans leading-relaxed">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection type="fadeUp">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              شاهد صوراً من حياتها
            </h2>
            <Button to="/gallery" size="lg">
              <ChevronLeft size={18} className="ml-2" />
              معرض الصور
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
