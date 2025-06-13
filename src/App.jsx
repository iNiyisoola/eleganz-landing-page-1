
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/Signup'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='*' element={<Login />} />
      <Route path='*' element={<SignUp />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
