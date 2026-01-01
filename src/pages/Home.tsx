import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-foreground">Sven Malvik</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Cloud Platform Architect & AI Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Building intelligent systems and exploring the frontiers of AI. Passionate about creating tools that empower individuals and teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20 animate-fade-in">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vissper Card */}
            <Card className="hover:shadow-soft transition-all hover:-translate-y-2 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-3xl">Vissper</CardTitle>
                <CardDescription className="text-base">
                  AI-powered meeting companion that captures, transcribes, and summarizes discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge>AI</Badge>
                  <Badge>macOS</Badge>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Rust</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/vissper">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Malfi Card */}
            <Card className="hover:shadow-soft transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="text-3xl">Malfi</CardTitle>
                <CardDescription className="text-base">
                  Personal finance iOS app with mortgage planning, portfolio tracking, and currency exchange
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge>iOS</Badge>
                  <Badge>SwiftUI</Badge>
                  <Badge>Rust</Badge>
                  <Badge>Finance</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/malfi">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 animate-fade-in">Get In Touch</h2>
          <div className="flex justify-center gap-6 animate-fade-in-up">
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/svenmalvik/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:sven@malvik.de">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
