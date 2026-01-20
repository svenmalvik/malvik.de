import { Sparkles, FolderTree, Smile, MessageCircleQuestion, RefreshCw, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intent Classification",
    description: "Claude AI understands context. Is it a task? An idea? A question? A note? Brainr categorizes automatically based on your message content.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: FolderTree,
    title: "PARA Method",
    description: "Your notes are organized using the proven PARA system—Projects, Areas, Resources, Archive. Everything has a home.",
    gradient: "from-accent/20 to-purple-500/20",
  },
  {
    icon: Smile,
    title: "Emoji Status Indicators",
    description: "Visual status at a glance. Tasks show progress, ideas show priority, questions show resolution state. All with intuitive emoji markers.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: MessageCircleQuestion,
    title: "Semantic Q&A Search",
    description: "Ask questions in natural language. Brainr searches your entire knowledge base and returns relevant answers instantly.",
    gradient: "from-pink-500/20 to-red-500/20",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Slack to Notion in seconds. Your thoughts appear in the right place before you've even switched tabs.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Zero Setup Required",
    description: "Connect Slack and Notion once. That's it. No complex configuration, no learning curve, no maintenance.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
];

const BrainrFeatureSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered capabilities that make knowledge management effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

export default BrainrFeatureSection;
