import React, { useRef } from "react";


export default function Reviews() {
    const box = useRef();
  //  let card = document.querySelector('.mycard');

    console.log(box)
    const btnpressprev=()=> {
        
          
           box.current.scrollLeft = box.current.scrollLeft - 278 -278/6.615-278/6.615;
           
        
        
    }

    const btnpressnext=()=> {
    
       
        box.current.scrollLeft = box.current.scrollLeft +  278 +278/6.615+278/6.615;
      
       
    }
    return (
        <div>
            <div className="Review">
                <button className="Review-button"> <h2>Reviews</h2></button>
            </div>

            <div className="product-carousel">
                <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


                <div className="product-container" ref={box}>
                    <div className="mycard-1">
                        <div className="text">Very time Convenient! </div>
                        <div className="box-1">
                            <i class="fas fa-quote-left fa2"></i>
                            very happy with salon service. Professional came on time & completed her work with perfection. Overall a great relaxing experienxe
                            <i class="fas fa-quote-right fa1"></i>
                            <div className="star">

                            </div>
                        </div>
                    </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                    <div className="mycard"> </div>
                </div>
            </div>
          

        </div>
    )
}
