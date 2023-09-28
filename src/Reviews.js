import React from "react";

const Reviews=()=> {
    let box = document.querySelector('.product-container');
    let card = document.querySelector('.mycard');
    // const computedStyle = window.getComputedStyle(card);
  
    
    const btnpressprev = () => {
        let width = card.clientWidth;
        // const marginLeft = parseFloat(card.marginLeft);
        // const marginRight = parseFloat(card.marginRight);
        // const margin = marginLeft+marginRight;
        box.scrollLeft = box.scrollLeft - width-width/6.615-width/6.615;
        console.log(width+width/6.615+width/6.615)
    }

    const btnpressnext = () => {
        let width = card.clientWidth
        // const marginLeft = parseFloat(card.marginLeft);
        // const marginRight = parseFloat(card.marginRight);
        // const margin = marginLeft+marginRight;
        box.scrollLeft = box.scrollLeft + width+width/6.615+width/6.615;
        console.log(width+width/6.615+width/6.615);
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
            <div className="mycard">Mycard No. 1</div>
            <div className="mycard">Mycard No. 2</div>
            <div className="mycard">Mycard No. 3</div>
            <div className="mycard">Mycard No. 4</div>
            <div className="mycard">Mycard No. 5</div>
            <div className="mycard">Mycard No. 6</div>
            <div className="mycard">Mycard No. 7</div>
            <div className="mycard">Mycard No. 8</div>
            <div className="mycard">Mycard No. 9</div>
            <div className="mycard">Mycard No. 10</div>
            <div className="mycard">Mycard No. 11</div>
            <div className="mycard">Mycard No. 12</div>
            </div>
        </div>
            {/* <div className="R">
                <div class="box"><i class="fas fa-quote-left fa2"></i>
                    <div class="text"><i class="fas fa-quote-right fa1"></i>
                        <div>
                            <h3>Review</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  .</p>
                        </div>
                    </div>
                </div>
                <div class="box"><i class="fas fa-quote-left fa2"></i>
                    <div class="text"><i class="fas fa-quote-right fa1"></i>
                        <div>
                            <h3>Review</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  .</p>
                        </div>
                    </div>
                </div>
                <div class="box"><i class="fas fa-quote-left fa2"></i>
                    <div class="text"><i class="fas fa-quote-right fa1"></i>
                        <div>
                            <h3>Review</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  .</p>
                        </div>
                    </div>
                </div>
                <div class="box"><i class="fas fa-quote-left fa2"></i>
                    <div class="text"><i class="fas fa-quote-right fa1"></i>
                        <div>
                            <h3>Review</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  .</p>
                        </div>
                    </div>
                </div> 
                
            </div>*/}

        </div>
    )
}
export default Reviews