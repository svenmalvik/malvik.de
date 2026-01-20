import { MessageSquareWarning, FolderSearch, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Scattered Thoughts",
    description: "Great ideas pop up in Slack, but they disappear into the noise. You know you wrote it down somewhere, but where?",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: FolderSearch,
    title: "Manual Organization is Tedious",
    description: "Creating Notion pages, choosing categories, tagging—it breaks your flow. By the time you've organized, you've lost the thought.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: HelpCircle,
    title: "The Retrieval Gap",
    description: "Your notes are scattered across apps. When you need that insight, you can't find it. Your second brain has amnesia.",
    gradient: "from-yellow-500/20 to-red-500/20",
  },
];

const BrainrProblemSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Knowledge Management is{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Broken
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You have great ideas. But capturing, organizing, and retrieving them shouldn't be this hard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative glass border border-border rounded-3xl p-8 hover:border-red-500/30 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="h-7 w-7 text-red-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-red-500 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrainrProblemSection;
