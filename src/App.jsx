import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeaderPage } from "./pages/headerPage"
import { Navbar } from "./components/navbar"


function App() {


  return (
    
      <BrowserRouter>
          <Navbar/>
      <Routes>
        <Route path="/" element={<HeaderPage/>}/>
      </Routes>

      </BrowserRouter>
    
  )
}

export default App
