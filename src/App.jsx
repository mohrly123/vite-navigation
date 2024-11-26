import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Startseite/mainpage.jsx";
import Second from "./Seite2/seitezwei.jsx";
import './App.css'

function App() {


  return (
    <Router basename='/vite-navigation'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page2' element={<Second />} />
      </Routes>
    </Router>
  )
}

export default App
