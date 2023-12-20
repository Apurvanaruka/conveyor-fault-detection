import { useState } from 'react'
import Form from "./components/Form"
import Form1 from "./components/Form1"
import { SignUp ,Login }from "./components/Login"
import Header from './components/Header'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Header /> */}
      {/* < Login/> */}
      {/* <Form /> */}
      <Form1/>
    </>
  )
}

export default App
