import { Cpu, Zap, Code2, Languages, RefreshCw, GitBranch } from "lucide-react";

const technicalFeatures = [
  {
    icon: Code2,
    title: "Rust Backend",
    description: "Precision decimal calculations with zero floating-point errors—the same language powering Microsoft, Amazon, and Dropbox critical systems.",
    highlight: "Zero Rounding Errors",
  },
  {
    icon: Cpu,
    title: "SwiftUI Native Interface",
    description: "Built with Apple's latest UI framework for smooth, native iOS performance and beautiful animations.",
    highlight: "100% Native",
  },
  {
    icon: Zap,
    title: "UniFFI Bridge",
    description: "Seamless Swift-Rust integration ensuring type safety across the entire stack.",
    highlight: "Type Safe",
  },
  {
    icon: GitBranch,
    title: "Decimal-Based Money",
    description: "Never use floating-point for financial calculations. Every cent is tracked with perfect precision.",
    highlight: "Perfect Precision",
  },
  {
    icon: RefreshCw,
    title: "Smart Caching",
    description: "API rate limiting and intelligent caching ensure fast performance without hitting API limits.",
    highlight: "Optimized Performance",
  },
  {
    icon: Languages,
    title: "12+ Languages",
    description: "Full internationalization support including English, Norwegian, German, Swedish, Danish, and more.",
    highlight: "Global Ready",
  },
];

const MalfiTechnicalSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Tech badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Precision Engineering</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Built with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Precision Engineering
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Malfi uses Rust for financial calculations—the same language that powers critical systems at Microsoft, Amazon, and Dropbox. Zero floating-point errors mean your money is always calculated correctly.
          </p>
        </div>

        {/* Technical features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technicalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass border border-primary/20 rounded-3xl p-8 text-center">
            <p className="text-lg text-muted-foreground">
              <span className="text-foreground font-semibold">Why Rust?</span> Unlike traditional finance apps that use floating-point math (leading to rounding errors), Malfi uses Rust's decimal types for perfect precision. When dealing with money, every fraction of a cent matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiTechnicalSection;
