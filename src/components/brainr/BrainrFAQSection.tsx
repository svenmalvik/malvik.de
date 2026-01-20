import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does Brainr understand what I'm writing?",
    answer: "Brainr uses Claude AI to analyze your message content, context, and intent. It classifies each message as a Task, Idea, Note, or Question, then determines the appropriate PARA category based on the content.",
  },
  {
    question: "What is the PARA method?",
    answer: "PARA stands for Projects, Areas, Resources, and Archive. It's a proven organizational system by Tiago Forte that helps you organize information by actionability. Brainr automatically categorizes your notes into these buckets.",
  },
  {
    question: "Do I need to configure anything in Notion?",
    answer: "Minimal setup required. You'll need to connect your Notion workspace and Brainr will create the necessary structure automatically. The PARA databases are generated on first use.",
  },
  {
    question: "Is my data private?",
    answer: "Your Slack messages are processed by Claude AI to determine intent and category. The content is then stored in your personal Notion workspace. Brainr doesn't store your messages—they flow directly from Slack to Notion.",
  },
  {
    question: "Can I use Brainr with a team?",
    answer: "Yes! Brainr can be configured to work with a shared Notion workspace. Team members can all capture notes that flow into a shared knowledge base, making institutional knowledge searchable.",
  },
  {
    question: "How does the semantic search work?",
    answer: "Brainr uses vector embeddings to understand the meaning of your notes, not just keywords. When you ask a question, it finds semantically similar content across your entire knowledge base and returns relevant results.",
  },
  {
    question: "What happens if the AI gets the category wrong?",
    answer: "You can manually move or recategorize notes in Notion. Over time, you can also fine-tune the classification by providing examples. The system learns from your organizational patterns.",
  },
  {
    question: "How can I try Brainr?",
    answer: "Reach out via email to get a personalized demo or learn how Brainr can be set up for your specific workflow. Each setup is tailored to your Slack workspace and Notion structure.",
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

const BrainrFAQSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
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
            Everything you need to know about Brainr
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

export default BrainrFAQSection;
