import { TrendingUp, Coins, Landmark, Calculator, DollarSign, PieChart } from "lucide-react";

const assetCategories = [
  {
    icon: TrendingUp,
    category: "Stocks",
    details: "NYSE, NASDAQ, LSE, Frankfurt, Tokyo, Warsaw",
    updateFrequency: "15-minute updates",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Coins,
    category: "Cryptocurrencies",
    details: "Bitcoin, Ethereum, Solana, and more",
    updateFrequency: "5-minute updates via CoinGecko",
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: Landmark,
    category: "Bank Accounts",
    details: "Checking, Savings, BSU (Norway)",
    updateFrequency: "Manual balance updates",
    gradient: "from-success/20 to-primary/20",
  },
  {
    icon: Calculator,
    category: "Mortgages",
    details: "Annuity & Serial loans with amortization",
    updateFrequency: "Real-time calculations",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: DollarSign,
    category: "Currencies",
    details: "NOK, EUR, USD, DKK, SEK, GBP, CHF",
    updateFrequency: "Hourly exchange rate updates",
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: PieChart,
    category: "Net Worth",
    details: "Total portfolio value across all assets",
    updateFrequency: "Real-time aggregation",
    gradient: "from-success/20 to-primary/20",
  },
];

const MalfiAssetsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--accent)) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Track Every{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Asset Class
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From global stocks to cryptocurrencies, bank accounts to mortgages—manage your complete financial portfolio in one place
          </p>
        </div>

        {/* Assets grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {assetCategories.map((asset, index) => {
            const Icon = asset.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${asset.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${asset.gradient} flex items-center justify-center mb-6`}>
                      <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {asset.category}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {asset.details}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-xs font-medium text-primary">
                        {asset.updateFrequency}
                      </span>
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

export default MalfiAssetsSection;
