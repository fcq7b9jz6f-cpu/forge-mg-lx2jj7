import { ChevronLeft, MapPin, Calendar, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const timeline = [
  {
    year: "1904",
    title: "الميلاد في طماي الزهايرة",
    description: "ولدت فاطمة إبراهيم السيد البلتاجي (أم كلثوم) في 31 ديسمبر 1904 في قرية طماي الزهايرة بمحافظة الدقهلية. كانت والدتها من عائلة موسيقية وكانت أول من أكتشف موهبتها الصوتية الفريدة.",
    icon: MapPin,
  },
  {
    year: "1923",
    title: "أولى خطواتها على المسرح",
    description: "بدأت أم كلثوم حفلاتها الأولى في القرى المصرية وهي في سن التاسعة عشرة. كانت تغني مع شقيقها خالد على مسارح الأعراس والمناسبات بمصاحبة العود والكمان.",
    icon: Mic2,
  },
  {
    year: "1926",
    title: "الصعود نحو القاهرة",
    description: "انتقلت أم كلثوم إلى القاهرة وبدأت في الغناء في المسارح الكبرى. التقت بالشيخ أبو العلا محمد الذي أدب صوتها وعلمها أصول التلاوة والمقامات، مما أثرى أداءها بشكل كبير.",
    icon: Calendar,
  },
  {
    year: "1934",
    title: "الأفلام والشهرة الواسعة",
    description: "قدمت أول أفلامها السينمائية وبدأت تسجيل أغانيها بالإذاعة. أصبحت أغانيها تُباع بمئات الآلاف من النسخ، وحظيت بحب جماهيري غير مسبوق في العالم العربي.",
    icon: Mic2,
  },
  {
    year: "1952",
    title: "ثورة يوليو والتغيير",
    description: "بعد ثورة يوليو 1952، تعمقت علاقة أم كلثوم بالقضايا الوطنية. قدمت أغاني ثورية مشهورة وكثفت حفلاتها الخيرية لدعم القضايا العربية.",
    icon: Calendar,
  },
  {
    year: "1960",
    title: "عصرها الذهبي",
    description: "في الستينيات بلغت أم كلثوم ذروة مجدها. تعاونت مع عمالقة الشعر والتلحين مثل أحمد شفيق كامل وبليغ حمدي ومحمد الموجي. قدمت أعظم أعمالها التي لا تزال خالدة حتى اليوم.",
    icon: Mic2,
  },
  {
    year: "1975",
    title: "رحيل العظمة",
    description: "في 3 فبراير 1975، رحلت أم كلثوم عن عالمنا بعد صراع مع المرض. شيعها ملايين المصريين والعرب في جنازة عظيمة لم تشهدها مصر من قبل. لكن صوتها وإرثها بقيا حيين إلى الأبد.",
    icon: Calendar,
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>حياتها | صوت أم كلثوم</title>
        <meta name="description" content="سيرة حياة كوكب الشرق أم كلثوم من الميلاد في طماي الزهايرة حتى رحيلها العظيم" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/9002822/pexels-photo-9002822.jpeg?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 container mx-auto px-4" dir="rtl">
          <AnimatedSection type="fadeUp">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">سيرتها الذاتية</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95]">
              حياة كوكب الشرق
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl font-sans">
              من قرية صغيرة في الدلتا إلى قمة الفن العربي، رحلة أربعة وسبعين عاماً من العطاء والإبداع
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection type="fadeUp">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-sans">
                أم كلثوم... اسم لا يحتاج إلى تعريف في أي بيت عربي. صوتها كان وما زال جسراً بين المشاعر والأرواح. لكن وراء هذا الصوت العظيم، قصة حياة مليئة بالتحديات والعطاء والإصرار.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed font-sans">
                ولدت في بيئة متواضعة، لكنها استطاعت أن تصل إلى قلوب الملايين بفضل موهبتها الاستثنائية واجتهادها الدؤوب. كانت تعتبر نفسها طالبة علم طوال حياتها، تتعلم من كل تعاون جديد وتسعى للأفضل دائماً.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection type="fadeUp" className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-sans">محطات من حياتها</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              خط الزمن
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute right-6 md:right-8 top-0 bottom-0 w-px bg-border/60" />
            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                type={i % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={i * 0.08}
              >
                <div className="relative flex gap-6 md:gap-8 mb-12 last:mb-0">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-sans mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection type="scaleIn">
            <div className="border border-border/50 rounded-2xl p-8 md:p-12 bg-secondary/20 backdrop-blur-sm text-center">
              <blockquote className="font-heading text-3xl md:text-4xl font-semibold leading-relaxed text-foreground">
                "الموسيقى هي حياتي، وصوتي هو كل ما أملك. لا أستطيع أن أتخيل نفسي دونهما."
              </blockquote>
              <p className="mt-6 text-muted-foreground font-sans text-lg">— أم كلثوم</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection type="fadeUp">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              اكتشف إرثها الموسيقي
            </h2>
            <Button to="/legacy" size="lg">
              <ChevronLeft size={18} className="ml-2" />
              إرثها الموسيقي
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
