import { Briefcase, Rocket, GraduationCap, Users, Palette } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Knowledge Workers",
    description: "Capture insights during meetings and research sessions",
    features: [
      "Quick capture without context switching",
      "Auto-organized meeting notes",
      "Instant retrieval of past insights",
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Rocket,
    title: "Founders & Entrepreneurs",
    description: "Build a knowledge base while building your company",
    features: [
      "Capture ideas on the go",
      "Track decisions and learnings",
      "Build institutional memory",
    ],
    gradient: "from-accent/20 to-purple-500/20",
  },
  {
    icon: GraduationCap,
    title: "Lifelong Learners",
    description: "Turn scattered learning into structured knowledge",
    features: [
      "Capture insights from books and courses",
      "Connect ideas across topics",
      "Build a personal wiki",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Users,
    title: "Teams & Collaborators",
    description: "Shared knowledge that everyone can access",
    features: [
      "Capture team decisions",
      "Shared Notion workspace",
      "Searchable team brain",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Palette,
    title: "Creators & Writers",
    description: "Never lose a creative spark again",
    features: [
      "Capture ideas instantly",
      "Organize by project or theme",
      "Retrieve inspiration when needed",
    ],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

const BrainrUseCasesSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Thinkers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're building a company, learning new skills, or creating content—Brainr adapts to your workflow
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

export default BrainrUseCasesSection;
