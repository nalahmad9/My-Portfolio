import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-stone-900 dark:text-stone-100 transition-colors duration-300">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;