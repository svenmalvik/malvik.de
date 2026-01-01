import { Outlet, Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Layout = () => {
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/vissper", label: "Vissper" },
    { path: "/malfi", label: "Malfi" },
    { path: "/music", label: "Music" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            malvik.de
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={item.path} className="flex items-center gap-6">
                {/* Add separator before Music */}
                {item.label === "Music" && (
                  <div className="h-6 w-px bg-border"></div>
                )}
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <button
              onClick={toggle}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <div key={item.path}>
                      {/* Add separator before Music */}
                      {item.label === "Music" && (
                        <div className="h-px w-full bg-border my-3"></div>
                      )}
                      <SheetClose asChild>
                        <Link
                          to={item.path}
                          className={`text-lg transition-colors ${
                            isActive(item.path)
                              ? "text-primary font-semibold"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
