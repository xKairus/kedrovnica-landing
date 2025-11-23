import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg'; 

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Кедровая бочка фон" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl"> 
          
          <div className="inline-block bg-secondary/90 px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            Собственное производство на Алтае
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Настоящие кедровые бочки для вашего здоровья
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Изготавливаем фитобочки и купели из реликтового кедра. 
            Доставка по всей России. Гарантия 3 года.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            <ListItem text="Без клея и химии — только натуральное дерево" />
            <ListItem text="Срок службы более 15 лет" />
            <ListItem text="Рассрочка 0% без первого взноса" />
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Рассчитать стоимость
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-4">
              Скачать каталог
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};


const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3">
    <CheckCircle className="text-secondary shrink-0" size={24} />
    <span className="text-base font-medium">{text}</span>
  </li>
);