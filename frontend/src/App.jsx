// import React, {useState,useEffect} from 'react'

// const App = () => {
//   const [data,setData] = useState([]);
  
//   useEffect(()=>{
//     fetch("/members").then(
//       res => res.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//     )
//   },[]);

//   return (
//     <div>

//     </div>
//   )
// }

// export default App

import React , {useState,useEffect} from 'react'

export default function App() {
  
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[]);
  
  return (
    <div>App</div>
  )
}

