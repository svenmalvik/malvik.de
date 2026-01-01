import { Crown, Globe, Heart, Home, ShieldCheck } from "lucide-react";

const useCases = [
  {
    icon: Crown,
    title: "High Net Worth Individuals",
    description: "Track diversified portfolios across asset classes",
    features: [
      "Monitor multiple properties and mortgages",
      "Multi-currency wealth management",
      "Comprehensive net worth tracking",
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Globe,
    title: "International Investors",
    description: "Manage investments across global markets",
    features: [
      "NYSE, NASDAQ, LSE, Frankfurt, Tokyo, Warsaw",
      "Multi-currency support (NOK, EUR, USD, DKK, SEK, GBP, CHF)",
      "Cross-border portfolio tracking",
    ],
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: Heart,
    title: "Couples Building Wealth Together",
    description: "Share financial visibility while maintaining privacy",
    features: [
      "Secure partner sharing via iCloud",
      "Shared financial goals tracking",
      "Individual account privacy",
    ],
    gradient: "from-success/20 to-primary/20",
  },
  {
    icon: Home,
    title: "Mortgage Planners",
    description: "Optimize your biggest financial decision",
    features: [
      "Compare annuity vs. serial loan strategies",
      "Visualize extra payment impact",
      "Plan debt payoff schedules",
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-Conscious Users",
    description: "Complete control over your financial data",
    features: [
      "No cloud dependencies",
      "On-device processing only",
      "Zero third-party tracking",
    ],
    gradient: "from-accent/20 to-success/20",
  },
];

const MalfiUseCasesSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Discerning Individuals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're managing a diverse portfolio, planning mortgages, or sharing finances with a partner—Malfi adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.slice(0, 3).map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6`}>
                      <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {useCases.slice(3).map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index + 3}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6`}>
                      <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MalfiUseCasesSection;
