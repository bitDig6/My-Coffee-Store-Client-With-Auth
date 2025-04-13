import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthProvider from './provider/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </AuthProvider>
  )
}

export default App
