import { Header } from './components/Header';

function App() {
  return (
    <div className="font-sans text-dark">
      <Header />
      
      <main className="pt-24 pb-20 container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold mb-6">
          Сайт находится в разработке
        </h1>
        <p className="text-lg text-gray-600">
          Мы настраиваем архитектуру и основные компоненты.
        </p>
        <div className="h-[150vh]"></div> 
      </main>
    </div>
  )
}

export default App