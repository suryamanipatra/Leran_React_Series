import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'Surya',
    age:21
  }
  let myArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Code [tailwind & props] tour with SunDiamond</h1>
    <Card username = 'Surya' btnText = 'click me'/>
    <Card  codeTour = "Code Tour With Surya" someObj = {myObj} username ="Code Tour" btnText = 'Visit me'/>
    <Card someArr={myArr} btnText = 'Hire me'/>
    <Card username = 'SunDiamond' btnText = 'Know more'/>
    <Card username ="End of today"/>
    </>
  )
}

export default App
