import { useState } from 'react'
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SingUp from './pages/SingUp';
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SingUp/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
