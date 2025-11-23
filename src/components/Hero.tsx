import { Button } from "../ui/Button"

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-cedar-green text-white flex items-center pt-[88px] overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cedar-green via-cedar-green/40 to-transparent z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1595646193796-0373801f6874?q=80&w=2000&auto=format&fit=crop"
          alt="Подарочный сертификат"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-10 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 uppercase tracking-wide">
            Проявить заботу и любовь - легко: <br />
            готовый подарок всего за 10 минут
          </h1>

          <p className="text-lg md:text-2xl font-light text-gray-300 mb-12">
            подарите близким отдых без лишних хлопот
          </p>

          <Button variant="primary" className="mb-8">
            Купить сертификат
          </Button>

          <p className="text-xs text-gray-400 max-w-md opacity-70">
            Сертификат можно оформить на любую сумму, спа-программу, курс,
            услугу или абонемент
          </p>
        </div>
      </div>
    </section>
  )
}
