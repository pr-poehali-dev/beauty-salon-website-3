import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Мастера", href: "/masters" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-600">
                <span className="text-3xl">🌸</span> Belle Salon
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Booking Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-rose-500 hover:to-pink-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Записаться
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-rose-600 p-2"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium">
                Записаться
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
