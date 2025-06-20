import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AppSidebar from './components/AppSidebar'
import Login from './screens/Login'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<AppSidebar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
