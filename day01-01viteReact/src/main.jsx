import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "React with Surya"

const ReactElement = React.createElement(
  'a',
  {href:'http://google.com',target:'blank'},
  'Click me to visit Google',
   anotherUser,
   anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // <App />
    // anotherElement
    ReactElement
 
)
