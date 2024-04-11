import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] =useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const[password,setPassword] = useState("")
  const[coppied,setCoppied]  = useState("copy")
  //useref Hook
  const passwordRef = useRef(null)  


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str += "0123456789"
    if(charAllow) str += "`~!@#$%^&*()_+[]{}"
    for(let i  =1;i <=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } 
  ,[length,numAllow,charAllow,setPassword])
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
    setCoppied("Copied");
    setTimeout(() =>{
      setCoppied('Copy')
    },2000)
  },[password])
  useEffect(() =>{passwordGenerator()},[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 mb-4 rounded-xl' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white py-4 px-5 mb-4 rounded-xl shrink-0' onClick={copyPassword}>{coppied}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min ={6} max= {50} value={length} className='cursor-pointer mb-3' onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex text-center gap--x-1'>
            <input type="checkbox" defaultChecked = {numAllow} id='numInput' onChange={()=>{setNumAllow((prev) =>!prev);
            }} className='mb-2' />
            <label htmlFor="numInput" className='px-1'>Numbers</label>
          </div>
          <div className='flex text-center gap--x-1'>
            <input type="checkbox" defaultChecked = {charAllow} id = 'charInput' onChange={()=>{setCharAllow((prev) => !prev);
            }} className='mb-2'/>
            <label htmlFor="charInput" className='px-1'>Charcter</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
