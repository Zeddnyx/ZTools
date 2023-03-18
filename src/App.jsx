import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar'
import Home from './Pages/Homepage'
import Cekrek from './Pages/Cekrek'
import CCGEN from './Pages/BinGen'
import SendWa from './Pages/SendWa'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import RandomUser from './Pages/RandomUser'
import PwGen from './Pages/PwGenerator'

function App() {
  const jokes = () => {
    console.log('Om mau ngapain om?')
    setTimeout(() => {
      console.log('Om jangan om!')
   }, 10000);
  }

  jokes()

  return <>
  <Router>
    <header>
      <Nav />
    </header>

    <div className='max-w-5xl mx-auto px-5 xl:px-20'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-rek' element={<Cekrek />} />
        <Route path='/bin-generator' element={<CCGEN />} />
        <Route path='/send-wa' element={<SendWa />} />
        <Route path='/about' element={<About />} />
        <Route path='/randomuser' element={<RandomUser />} />
        <Route path='/pwgen' element={<PwGen />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </Router>
  </>
}
export default App
