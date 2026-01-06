// import React, { createContext } from 'react'
// import Useeff1 from './component/Useeff1'
// import Usereff2 from './component/Usereff2'
// import Usecontext1 from './component/Usecontext1'
// import Useref2 from './component/Useref2';

// export const LoginContext = createContext();
// const App = () => {
//   return (
//     // <LoginContext.Provider value={true}>
      
//     // <div>
//     //     {/* <Useeff1/> */}

//     //     {/* <Usereff2/> */}

//     //     <Usecontext1/>
//     // </div>

//     // </LoginContext.Provider>
//     <div>
//       <Useref2/>
//     </div>
//   )
// }

// export default App

//app.jsx
// import React, { useState } from 'react'
// import FormInput from './component/FormInput'
// import DisplayData from './component/DisplayData'
// const App = () => {
//   const [submittedData,setSubmittedData]=useState([])
//   const handledataSubmit=(data)=>{
//     setSubmittedData(prev => [...prev, data]); // append new data
//   }
//   const handleDelete=(idx)=>{
//     const copy=[...submittedData];
//     copy.splice(idx,1)
//     setSubmittedData(copy)
//   }
//   return (
//     <div>
//       <FormInput onSubmitData={handledataSubmit}/>
//       <DisplayData data={submittedData} onDelete={handleDelete}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import GetUsers from './component/GetUsers'
// import DelUSers from './DelUSers'
// import PostUser from './PostUser'
// import PutUser from './PutUSer'

// const App = () => {
//   return (
//     <div>
//       {/* <GetUsers/> */}
//       {/* <DelUSers/> */}
//       {/* <PostUser/> */}
//       <PutUser/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home";

import Contact from "./components/Contact";
import About from './component/About';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
