import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {
  return (
    <div className="font-sans text-dark">
      <Header />

      <main>
        <Hero />

        <div className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Здесь будет каталог</h2>
          <div className="h-[50vh] bg-gray-100 rounded-lg"></div>
        </div>
      </main>
    </div>
  )
}

export default App
