import React from 'react'
import {crews} from '../Pages/Data';

export default function Myteam() {
  return (
    <main>
    <header className="header_wrapper">
        <div className="header_left">
            <h1 className="header_left_title">
            The creative crew
            </h1>
        </div>
<div className="header_right">
    <h2 className="header_right_title">
    Who we are 
    </h2>
    <p className="header_right_paragraph">
    We are team of creatively diverse. driven. innovative individuals 
    working in various locations from the world.
    </p>
</div>
    </header>
    <div className="content_details">
        {crews.map((crew, i) =>(
            <div className="card_content" key={i}>
            <div className="card_items">
                <figure>
            <img src={crew.photo} alt="" className="content_image"/>
            
             <p className="name">{crew.name}</p> 
             
             </figure>
            
             <p className="role">{crew.role}</p>
             </div >
             </div>
            
        ))}
        
   </div>     
   <footer>
      <a href="https://github.com/femakin/" className="footer_content">
        Femi @ 
      </a>
      <a href="https://devchallenges.io/" className="footer_content">DevChallenges.io</a>
    </footer>
     </main>
  )
}
