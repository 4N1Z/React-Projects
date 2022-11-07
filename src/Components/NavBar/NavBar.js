import React from 'react'
import "./NavBar.css"
import {useState} from 'react'
import { useEffect } from 'react'


function NavBar() {

  const [searchMovie, setSearchMovie ] = useState('')

  return (

    <div className='navBar'>
        <img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <div className="search_bar" >
         <i onClick={()=>{
          
          alert("Feature CommingSoon")
         }} class="fa-solid fa-magnifying-glass"></i>
         {/* <form action="#" onSubmit={(e) => e.preventDefault()} ></form> */}

         <input 
         className='search_box'
         type="text" 
         placeholder='Movies, TV Shows ..'
         value = {searchMovie}
         onChange = {(e)=>setSearchMovie(e.target.value)}
         />
        </div>

        <img onClick={()=> {
          alert("Feature CommingSoon!")
        }} className = "Avatar"src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg" alt="" />

    </div>
  )
}


export default NavBar