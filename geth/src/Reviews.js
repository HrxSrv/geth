import React, { useRef,useState,useEffect } from "react";
import logo from './component/user.png'
import logo2 from './component/profile.png'
import logo1 from './component/person.png'
import logo3 from './component/user-gear.png'
import axios from 'axios'
export default function Reviews() {
    const box = useRef();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://geth-ofyh.onrender.com/getReviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchReviews();
        // console.log("*")
    }, []);
    // console.log(reviews)
    //let card = document.querySelector('.mycard');

    //console.log(box)
    const btnpressprev=()=> {
        
          
           box.current.scrollLeft = box.current.scrollLeft - 278 -278/6.615-278/6.615;
           
        
        
    }

    const btnpressnext=()=> {
    
       
        box.current.scrollLeft = box.current.scrollLeft +  278 +278/6.615+278/6.615;
      
       
    }
    const UserProfileContainer = ({ userreview, index }) => {
        // console.log(userreview)
        return (
            <div className="mycard-1">
                <div className="text">
                    <img className="user-logo" src={logo3} alt="logo"/>
                    <span>{userreview.username}</span>
                </div>
                
                <div className="box-1">
                <i className="fas fa-quote-left fa2"></i>
                <p className="text-review">{userreview.review}</p>
                <i className="fas fa-quote-right fa1"></i>    
                </div>
            </div>
        )
    };
    const renderUserReviews = () => {
        return reviews.map((userreview, index) => (
            <UserProfileContainer key={index} userreview={userreview} />
        ));

    };

    return (
        <div>
            <div className="Review">
                <button className="Review-button"> <h2>Reviews</h2></button>
            </div>

            <div className="product-carousel">
                <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


                <div className="product-container" ref={box}>
                    {renderUserReviews()}
                </div>
            </div>
          

        </div>
    )
}
