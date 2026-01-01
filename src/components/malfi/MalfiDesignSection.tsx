import { Palette, Moon, Sun, Sparkles, Smartphone, Quote } from "lucide-react";

const designFeatures = [
  {
    icon: Palette,
    title: "Luxury Aesthetics",
    description: "Dark themes with rose gold accents and refined typography create an elegant, focused experience.",
  },
  {
    icon: Moon,
    title: "Dark & Light Modes",
    description: "Seamlessly switch between themes that adapt to your environment and preferences.",
  },
  {
    icon: Sparkles,
    title: "Smooth Animations",
    description: "Delightful transitions and micro-interactions make every action feel premium.",
  },
  {
    icon: Smartphone,
    title: "Haptic Feedback",
    description: "Subtle tactile responses provide confirmation for important actions.",
  },
];

const MalfiDesignSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Design badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Luxury Design</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Luxury Design Meets{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Functionality
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience wealth management with an interface worthy of your success. Dark themes, rose gold accents, and refined typography create an elegant, focused experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Screenshot showcase area */}
          <div className="mb-16 animate-fade-in-up">
            <div className="relative">
              {/* Main screenshot area - side-by-side comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Dark mode screenshot */}
                <div className="relative group">
                  <div className="rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      src="/malfi/malfi-dashboard-dark.png"
                      alt="Malfi Dashboard - Dark Mode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-4 py-2 rounded-full border border-border">
                    <Moon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 scale-90 opacity-50"></div>
                </div>

                {/* Light mode screenshot */}
                <div className="relative group">
                  <div className="rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      src="/malfi/malfi-dashboard-light.png"
                      alt="Malfi Dashboard - Light Mode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-4 py-2 rounded-full border border-border">
                    <Sun className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Light Mode</span>
                  </div>
                  <div className="absolute inset-0 bg-accent/10 blur-3xl -z-10 scale-90 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* UX Features grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {designFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="glass border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Daily inspiration quote callout */}
          <div className="glass border border-primary/20 rounded-3xl p-8 text-center">
            <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground mb-2">
              Start each day with inspiration
            </p>
            <p className="text-sm text-muted-foreground/80">
              Malfi greets you with daily motivational quotes to keep you focused on your financial goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiDesignSection;
