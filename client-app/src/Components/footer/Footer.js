import React from 'react'
import './Footer.css'



const Footer = () => {
    return (
        
           <div className="main-footer">
            
            <div className="logoo">
            <img style={{height:"50px"}} src="/images/logoNavbar.png" alt="logo"/>
            
           <p>The goal of our site is to find solutions to the problem of surplus production <br/> in all the world through trade by exchange. </p>
             
     </div> 
       
          
          <div className="col">
            <h4>Social media :</h4>
            <ul> 
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              </ul>
            
         
          
          
            <h4>contact us :</h4>
            <ul >
              <li>Email:agroexchange@gmail.com</li>
              <li>Phone:0021625747995</li>
              
            </ul>
          
          </div>
          
        
        
        <div >
          <p className="col-sm">
            &copy;{new Date().getFullYear()} agroExchange website | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      
    </div>
    
  );
}

  
      
    


export default Footer
