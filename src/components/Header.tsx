import { Phone, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-secondary">
            Кедровница
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-dark">
          <a href="#catalog" className="hover:text-secondary transition-colors">Каталог</a>
          <a href="#benefits" className="hover:text-secondary transition-colors">Преимущества</a>
          <a href="#reviews" className="hover:text-secondary transition-colors">Отзывы</a>
          <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <a href="tel:+79991234567" className="font-bold text-lg text-dark flex items-center gap-2">
              <Phone size={18} className="text-secondary" />
              +7 (999) 123-45-67
            </a>
            <span className="text-xs text-gray-500">Ежедневно с 9:00 до 20:00</span>
          </div>
          <Button variant="primary">
            Заказать звонок
          </Button>
        </div>

        <button className="md:hidden p-2 text-dark">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};