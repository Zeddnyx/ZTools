import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar'
import Home from './Pages/Homepage'
import Cekrek from './Pages/Cekrek'
import CCGEN from './Pages/BinGen'

function App() {
  return <>
  <Router>
    <header>
      <Nav />
    </header>

    <div className='max-w-5xl mx-auto px-5 xl:px-20'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tools1' element={<Cekrek />} />
        <Route path='/bingenerator' element={<CCGEN />} />
      </Routes>
    </div>
  </Router>
  </>
}
export default App
