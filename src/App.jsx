import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import UPI from './pages/UPI'

function App() {
  

  return (
    <Router>
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/upi' element={<UPI/>}/>
        <Route path='/register' element={<UPI/>}/>
        </Routes> 
    </Router>
  )
}

export default App
