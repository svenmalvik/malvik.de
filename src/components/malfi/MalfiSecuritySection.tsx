import { Shield, Lock, Key, Eye, Server, Code, BarChart3, Cookie } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "SQLCipher Encryption",
    description: "End-to-end encryption for all financial data",
  },
  {
    icon: Key,
    title: "Biometric Authentication",
    description: "Face ID / Touch ID protection",
  },
  {
    icon: Shield,
    title: "Secure Keychain Storage",
    description: "iOS Keychain for API keys and secrets",
  },
  {
    icon: Server,
    title: "No Cloud Storage",
    description: "All processing happens on-device",
  },
  {
    icon: Eye,
    title: "Memory Clearing",
    description: "Secure clearing of sensitive information",
  },
  {
    icon: Code,
    title: "Open-Source Rust Core",
    description: "Transparent, auditable calculations",
  },
  {
    icon: BarChart3,
    title: "No Tracking",
    description: "Zero analytics, ads, or third-party sharing",
  },
  {
    icon: Cookie,
    title: "Privacy First",
    description: "Your data never leaves your device",
  },
];

const MalfiSecuritySection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Security badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Military-Grade Security</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bank-Grade Security,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy First
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your financial data deserves the highest level of protection. Malfi uses military-grade encryption and never shares your data with third parties.
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="glass border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust statement */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass border border-primary/20 rounded-3xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">100% Private.</span> Malfi never collects, tracks, or shares your financial data. All calculations and data storage happen entirely on your device. We can't see your data—and we wouldn't want to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiSecuritySection;
