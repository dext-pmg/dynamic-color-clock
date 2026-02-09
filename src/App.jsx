import React from "react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  format } from "date-fns";

  function App() {
    const [dateTime,setDateTime]= useState(new Date())
  return(
    <div className="app-container">
      <p className="date-text"> {format(dateTime,"yyy/MM/dd \n HH:mm:ss")}</p>
    </div>
  )} 
export default App
