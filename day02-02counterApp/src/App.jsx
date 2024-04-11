//Q. Let's learn our first hook,that is useState with building our first react project.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  // let [counter,sundiaCounter] = useState(10)
  // let counter = 10
  const addValue = () =>{
   counter  = counter + 1;
    setCounter(counter)
  // sundiaCounter(counter)
   console.log('value Increased',setCounter);
  }
  const removeValue = () =>{
    counter = counter - 1;
      setCounter(counter)
    console.log("Value Decresed",setCounter)
  }

  return (
    <>
      <h1>Code tour with SunDiamond</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value{counter}</button>  
      <p>Footer:{counter}</p>      
    </>
  )
}

export default App




// ASSIGNMENT-01
// Do it Yourself
// Now it is your turn to apply your logic such that clicking on the Add value button it will not working after the value is 20.Similarly do the same for Remove Value such that it will not working after the value is 0(That means negative values are not allowed)
//Hints: Simple use if statement

//SOLUTION-01

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter,setCounter] = useState(10)
//   // let [counter,sundiaCounter] = useState(10)
//   // let counter = 10
//   const addValue = () =>{
//    counter  = counter + 1;
//    if (counter <= 20){
//     setCounter(counter)
//    }
   
//   // sundiaCounter(counter)
//    console.log('value Increased',setCounter);
//   }
//   const removeValue = () =>{
//     counter = counter - 1;
//     if (counter >= 0) {
//       setCounter(counter)
//     }
    
//     console.log("Value Decresed",setCounter)
//   }

//   return (
//     <>
//       <h1>Code tour with SunDiamond</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button
//       onClick={addValue}>Add Value{counter}</button>
//       <br />
//       <button
//       onClick={removeValue}>Remove value{counter}</button>  
//       <p>Footer:{counter}</p>      
//     </>
//   )
// }

// export default App


//ASSIGNMENT-03

//What is the difference between codes which are given below;

      // CODE - 01

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter,setCounter] = useState(10)
//   const addValue = () =>{
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
//    console.log('value Increased',setCounter);
//   }
//   const removeValue = () =>{
    
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     console.log("Value Decresed",setCounter)
//   }

//   return (
//     <>
//       <h1>Code tour with SunDiamond</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button
//       onClick={addValue}>Add Value{counter}</button>
//       <br />
//       <button
//       onClick={removeValue}>Remove value{counter}</button>  
//       <p>Footer:{counter}</p>      
//     </>
//   )
// }

// export default App


    //CODE - 02

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter,setCounter] = useState(10)
//   const addValue = () =>{
//     setCounter(counter + 1)
//     setCounter(counter + 1)
//     setCounter(counter + 1)
//     setCounter(counter + 1)
//    console.log('value Increased',setCounter);
//   }
//   const removeValue = () =>{
    
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     setCounter(prevCounter => prevCounter - 1)
//     console.log("Value Decresed",setCounter)
//   }

//   return (
//     <>
//       <h1>Code tour with SunDiamond</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button
//       onClick={addValue}>Add Value{counter}</button>
//       <br />
//       <button
//       onClick={removeValue}>Remove value{counter}</button>  
//       <p>Footer:{counter}</p>      
//     </>
//   )
// }

// export default App

