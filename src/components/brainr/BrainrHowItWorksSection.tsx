import { MessageSquare, Brain, FolderTree, Search, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Capture",
    description: "Drop a thought into Slack. Just type naturally—no formatting required.",
    example: '"New idea: use vector embeddings for note search"',
    gradient: "from-green-500/20 to-emerald-500/20",
    color: "text-green-500",
  },
  {
    icon: Brain,
    step: "02",
    title: "Classify",
    description: "Claude AI analyzes your message and determines intent: Task, Idea, Note, or Question.",
    example: "Intent: Idea | Category: Projects",
    gradient: "from-primary/20 to-accent/20",
    color: "text-primary",
  },
  {
    icon: FolderTree,
    step: "03",
    title: "Organize",
    description: "Auto-sorted into Notion using PARA (Projects, Areas, Resources, Archive) with emoji status indicators.",
    example: "→ Projects / Brainr / Ideas",
    gradient: "from-accent/20 to-purple-500/20",
    color: "text-accent",
  },
  {
    icon: Search,
    step: "04",
    title: "Search",
    description: "Ask questions in natural language. Get instant answers from your entire knowledge base.",
    example: '"What were my ideas about embeddings?"',
    gradient: "from-purple-500/20 to-primary/20",
    color: "text-purple-500",
  },
];

const BrainrHowItWorksSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Brainr
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From thought to organized knowledge in seconds—no manual work required
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Arrow between steps (hidden on mobile and after last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10">
                      <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                    </div>
                  )}

                  <div className="group h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative glass border border-border rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                      {/* Step number */}
                      <div className={`text-xs font-mono ${step.color} mb-4`}>
                        Step {step.step}
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${step.color}`} strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <h3 className={`text-xl font-bold text-foreground mb-2 group-hover:${step.color} transition-colors`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Example */}
                      <div className="bg-muted/50 rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground">
                        {step.example}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="glass border border-primary/20 rounded-3xl p-8 text-center">
            <p className="text-lg text-muted-foreground">
              <span className="text-foreground font-semibold">Zero friction.</span> Just message Slack like you normally would. Brainr handles the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainrHowItWorksSection;
