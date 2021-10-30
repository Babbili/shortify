import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Form from './components/Form'
import Statistics from './components/Statistics'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bd-container">
        <Home />
        <Form />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </div>
  )
}

export default App
