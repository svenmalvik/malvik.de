import { LayoutDashboard, Globe2, Calculator, Landmark, Users, WifiOff } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Wealth Dashboard",
    description: "Track your total net worth at a glance. Malfi aggregates all your bank accounts, investment portfolios, and mortgages into one beautiful dashboard with real-time calculations in your preferred currency.",
    gradient: "from-primary/20 to-accent/20",
    imagePlaceholder: "Dashboard showing net worth card, account summaries, and portfolio values",
  },
  {
    icon: Globe2,
    title: "Global Investment Tracking",
    description: "Monitor your portfolio across NYSE, NASDAQ, London, Frankfurt, Tokyo, and Warsaw exchanges. Track Bitcoin, Ethereum, Solana, and more—all with real-time pricing and automatic gain/loss calculations.",
    gradient: "from-accent/20 to-success/20",
    imagePlaceholder: "Portfolio view showing stocks and crypto with gains/losses highlighted",
  },
  {
    icon: Calculator,
    title: "Intelligent Mortgage Planning",
    description: "Compare annuity vs. serial loans, visualize complete amortization schedules, and see exactly how extra payments impact your mortgage. Perfect for planning your path to debt freedom.",
    gradient: "from-success/20 to-primary/20",
    imagePlaceholder: "Mortgage calculator with amortization schedule",
  },
  {
    icon: Landmark,
    title: "Bank Account Management",
    description: "Track checking, savings, and tax-advantaged accounts. Monitor balances over time and see everything converted to your preferred currency.",
    gradient: "from-primary/20 to-accent/20",
    imagePlaceholder: "Bank accounts list with different account types",
  },
  {
    icon: Users,
    title: "Partner Portfolio Sharing",
    description: "Connect with your partner via iCloud to view shared financial data. Perfect for couples managing wealth together while maintaining individual privacy.",
    gradient: "from-accent/20 to-success/20",
    imagePlaceholder: "Partner view showing shared portfolios",
  },
  {
    icon: WifiOff,
    title: "Offline-First Architecture",
    description: "All your data is cached locally with smart refresh logic. View your complete financial picture even without internet connection.",
    gradient: "from-success/20 to-primary/20",
    imagePlaceholder: "Offline indicator with cached data",
  },
];

const MalfiFeatureSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            See Your Complete{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Financial Picture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for the discerning individual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-card`}>
                      <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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

export default MalfiFeatureSection;
