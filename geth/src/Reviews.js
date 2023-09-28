import React from "react";

export default function Reviews() {
    let box = document.querySelector('.product-container');
    let card = document.querySelector('.mycard');


    function btnpressprev() {
        let width = card.offsetWidth;
        box.scrollLeft = box.scrollLeft - width - width / 6.615 - width / 6.615;
        console.log(width + width / 6.615 + width / 6.615)
    }

    function btnpressnext() {
        let width = card.offsetWidth;
        box.scrollLeft = box.scrollLeft + width + width / 6.615 + width / 6.615;
        console.log(width + width / 6.615 + width / 6.615);
    }
    return (
        <div>
            <div className="Review">
                <button className="Review-button"> <h2>Reviews</h2></button>
            </div>

            <div className="product-carousel">
                <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


                <div className="product-container">
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
