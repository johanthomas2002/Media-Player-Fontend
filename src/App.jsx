import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'


function App() {

  return (
    <>
      <Header/>

      {/* << Setting Routes to navigate to different pages (Using react-router-dom library)*/}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      {/* Setting Routes to navigate to different pages >> */}

      <Footer/>
    </>
  )
}

export default App
