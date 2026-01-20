import { Cpu, Code2, Sparkles, MessageSquare, FileText, Cloud } from "lucide-react";

const techStack = [
  {
    icon: Code2,
    title: "Node.js",
    description: "Event-driven architecture for handling real-time Slack events and Notion API calls efficiently.",
    highlight: "Runtime",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Full type safety across the codebase ensures reliability and maintainable code.",
    highlight: "Type Safe",
  },
  {
    icon: Sparkles,
    title: "Claude AI",
    description: "Anthropic's Claude powers intent classification, content analysis, and semantic search.",
    highlight: "AI Engine",
  },
  {
    icon: MessageSquare,
    title: "Slack API",
    description: "Real-time event handling via Slack's Events API. Instant capture of your thoughts.",
    highlight: "Input",
  },
  {
    icon: FileText,
    title: "Notion API",
    description: "Direct integration with Notion's API for creating and organizing pages automatically.",
    highlight: "Storage",
  },
  {
    icon: Cloud,
    title: "Vercel",
    description: "Serverless deployment with edge functions for low-latency global performance.",
    highlight: "Hosting",
  },
];

const BrainrTechnicalSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
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
            <span className="text-sm font-medium">Modern Stack</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Built with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A serverless architecture combining the best of Node.js, TypeScript, and AI for reliable, scalable knowledge management.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
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
                          {tech.highlight}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {tech.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {tech.description}
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
              <span className="text-foreground font-semibold">Built for you.</span> Get in touch to see how Brainr can be customized for your personal workflow and knowledge management needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainrTechnicalSection;
