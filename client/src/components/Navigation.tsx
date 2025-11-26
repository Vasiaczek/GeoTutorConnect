import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
            data-testid="link-home"
          >
            <img
  src="/logo_with_border.png"
  alt="Logo"
  width={40}
  height={40}
  className="h-8 w-auto"
/>

          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-tutoring"
            >
              Tutoring
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md text-left"
              data-testid="link-tutoring-mobile"
            >
              Tutoring
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md text-left"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md text-left"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
