import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Does Malfi store my data in the cloud?",
    answer: "Your financial data is stored locally on your device with military-grade encryption. Optional partner sharing uses Apple's secure CloudKit, but only for metadata—your data stays encrypted end-to-end.",
  },
  {
    question: "Which exchanges and cryptocurrencies are supported?",
    answer: "Stocks from NYSE, NASDAQ, London Stock Exchange, Frankfurt, Tokyo, and Warsaw exchanges. Major cryptocurrencies including Bitcoin, Ethereum, and Solana via CoinGecko API.",
  },
  {
    question: "How often are prices updated?",
    answer: "Stock prices refresh every 15 minutes, cryptocurrency prices every 5 minutes, and exchange rates every hour. All data is cached for offline access.",
  },
  {
    question: "Can I track mortgages from any country?",
    answer: "Yes! Malfi supports both annuity and serial loan types with customizable interest rates and terms. Special support for Norwegian BSU accounts.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Malfi has no analytics, no tracking, and no ads. All calculations happen on your device. We never see your financial data.",
  },
  {
    question: "What currencies are supported?",
    answer: "NOK, EUR, USD, DKK, SEK, GBP, and CHF with real-time exchange rates updated hourly.",
  },
  {
    question: "Can I use Malfi offline?",
    answer: "Yes! All your data is available offline. Malfi caches prices and rates, showing you stale data indicators when needed so you always know how fresh your information is.",
  },
  {
    question: "How does partner sharing work?",
    answer: "Connect via iCloud to securely share read-only financial data with your partner. Both parties must consent, and each maintains full control of their own data.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass border border-border hover:border-primary/30 rounded-2xl p-6 text-left transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-foreground pr-8">
            {faq.question}
          </h3>
          <ChevronDown
            className={`flex-shrink-0 h-5 w-5 text-primary transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </button>
    </div>
  );
};

const MalfiFAQSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Malfi
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Additional support */}
        <div className="mt-16 text-center">
          <div className="glass border border-primary/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <p className="text-sm text-muted-foreground">
              Contact us at{" "}
              <a
                href="mailto:sven@malvik.de"
                className="text-primary hover:underline font-medium"
              >
                sven@malvik.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiFAQSection;
