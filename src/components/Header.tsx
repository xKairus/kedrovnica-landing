import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/Button"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <span className="text-2xl font-serif font-bold text-dark tracking-widest cursor-pointer">
            КЕДРОВНИЦА
          </span>
        </div>

        {/* 1. Меню (Десктоп) */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-dark text-sm uppercase tracking-wide">
          <a href="#" className="hover:text-terracotta transition-colors">
            Услуги
          </a>
          <a href="#" className="hover:text-terracotta transition-colors">
            Мастера
          </a>
          <a href="#" className="hover:text-terracotta transition-colors">
            Отзывы
          </a>
          <a href="#" className="hover:text-terracotta transition-colors">
            Контакты
          </a>
        </nav>

        {/* 2. Правая часть (Десктоп) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="text-right text-xs leading-relaxed text-gray-600">
            <p className="font-semibold text-gray-400 mb-0.5">Режим работы</p>
            <p className="font-bold text-dark text-sm">
              Ежедневно 10:00 - 21:00
            </p>
          </div>

          {/* Кнопка на десктопе */}
          <Button variant="outline" className="">
            Купить сертификат
          </Button>
        </div>

        {/* 3. Кнопка мобильного меню (Гамбургер) */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white p-4 shadow-lg flex flex-col gap-4">
          {/* Меню */}
          <a href="#" className="text-dark font-medium">
            Услуги
          </a>
          <a href="#" className="text-dark font-medium">
            Мастера
          </a>
          <a href="#" className="text-dark font-medium">
            Отзывы
          </a>

          {/* Режим работы */}
          <div className="text-sm text-gray-500">Ежедневно 10:00 - 21:00</div>

          {/* Кнопка, видимая ТОЛЬКО в мобильном меню */}
          <Button variant="primary" className="w-full justify-center mt-2">
            Купить сертификат
          </Button>
        </div>
      )}
    </header>
  )
}
