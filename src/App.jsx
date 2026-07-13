import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Advisory from './pages/Advisory'
import WeatherAlerts from './pages/WeatherAlerts'
import CropCalendar from './pages/CropCalendar'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-green-700 text-white p-4 flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/advisory">Advisory</Link>
        <Link to="/weather">Weather Alerts</Link>
        <Link to="/calendar">Crop Calendar</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/weather" element={<WeatherAlerts />} />
        <Route path="/calendar" element={<CropCalendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App