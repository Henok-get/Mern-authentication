import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
function App() {
 
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>

<Route path="/"  element={<Home/>}/>
<Route path="/about"  element={<About/>}/>

<Route path="/signin"  element={<Signin/>}/>
<Route path="/signup"  element={<Signup/>}/>
<Route element={<PrivateRoute/>}>
<Route path="/profile"  element={<Profile/>}/>
</Route>
  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App
