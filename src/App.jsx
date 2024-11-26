import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Startseite/mainpage.jsx";
import Second from "./Seite2/seitezwei.jsx";
import Third from "./Seite3/seitedrei.jsx";
import './App.css'

function App() {


  return (
    <Router basename='/vite-navigation'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page2' element={<Second />} />
        <Route path='/page3' element={<Third />} />
      </Routes>
    </Router>
  )
}

export default App
