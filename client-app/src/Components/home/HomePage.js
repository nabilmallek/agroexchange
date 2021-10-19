import React from 'react'
import "./home.css"


import Slider from "react-slick";
import PostList from '../postList/PostList';
import NavBar from '../navbar/NavBar';
import { useSelector } from 'react-redux';



const HomePage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"slid",
        autoplay: true,
        autoplaySpeed: 2000
      };

      const filterText = useSelector(state => state.users.filter)
      console.log(filterText);
    return (
        <div>
          
       {filterText?<PostList filterText={filterText}/> :null}  
            <Slider {...settings}>
          <div>
              <img style={{ width: "100% "}} src="/images/slide-1.jpg" alt="" />
          </div>
          <div>
          <img  style={{ width: "100% "}} src="/images/slide-2.jpg" alt="" />
          </div>
          <div>
          <img  style={{ width: "100% "}} src="/images/slide-3.jpg" alt="" />
          </div>
          <div>
          <img  style={{ width: "100% "}} src="/images/slide-4.jpg" alt="" />
          </div>
          <div>
          <img  style={{ width: "100% "}} src="/images/slide-5.jpg" alt="" />
          </div>
   
        </Slider>
        <div className="para">  <p>Food is essential to the continuation of life,<br/> 
               and it must be avoided.</p>
           <p> Farmers should be encouraged to produce <br/>
               and find solutions for them.</p>
           <p> The starvation of production and the availability of <br/>
               marketing solutions will inevitably lead to lower prices for the consumer.So increase sales.</p></div>
         
             

             <div className="imges">
             <img  src="/images/im1.jpg" alt="" />
               <img  src="/images/im2.jpg" alt="" />
               <img  src="/images/im3.jpg" alt="" />
             </div>
        </div>
    )
}

export default HomePage
