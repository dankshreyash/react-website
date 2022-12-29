import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../Asset/3.jpg';
import img2 from '../Asset/4.jpg';





function Services() {
    return (
        <div >
            <Carousel
            infiniteLoop
             autoPlay 
             showStatus={false}
              showArrows={false} 
              interval={1000}
            showThumbs={false}
            >
                <div>
                    <img src={img1} alt='Item1'></img>
                    <p className='legend'>Full Stack Development </p>
                </div>



                <div>
                    <img src={img2} alt='Item2'></img>
                    <p className='legend'>Peer 2 Peer Support </p>
                </div>




            </Carousel>
        </div>
    )
}

export default Services