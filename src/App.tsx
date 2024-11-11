import './App.css'
import { Route, Routes } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent';

function App() {

  return (
      <Routes>
          <Route path="/" element={<DefaultComponent/>} />
          <Route path="/page2" element={<div>page 2</div>} />
      </Routes>
  )
}

export default App
