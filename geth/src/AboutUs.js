import React from "react";

export default function AboutUs({elementToScroll}) {
   


    return (
        <div>
            <section id="container" class="container" ref={elementToScroll}>
                <div class="about-section">
                    <h1 >About Us</h1>
                    <p>Welcome to geth, your trusted platform for all your job and household service needs!</p>
                </div>

                <div class="mission-section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower individuals and communities by providing a seamless and user-friendly platform where talent meets opportunity. We aim to bridge the gap between job seekers and employers while also facilitating access to skilled professionals who can take care of your household tasks with utmost precision.</p>
                </div>

                <div class="why-choose-section">
                    <h2>Why Choose geth?</h2>
                    <div className="why-m">
                        <div className="why-m1">
                          <b> 1.  Expert Household Services</b><p> Our platform hosts a network of experienced professionals ready to assist with household chores, repairs, and other tasks, so you can enjoy more free time and peace of mind.</p>
                        </div>
                        <div className="why-m2">
                           <b> 2.  Safety and Trust</b> <p> We prioritize safety and trust in all interactions. Our rigorous vetting process ensures that all service providers are relible, while  secure payment system guarantees transparency and peace of mind.</p>
                        </div>

                    </div>
                </div>

                <div class="team-section">
                    <h2>Our Team</h2>
                    <p>Behind geth is a dedicated team of professionals who are passionate about connecting people and fostering a sense of community. We work tirelessly to improve your experience on our platform, so you can focus on what matters most to you.</p>
                </div>

                <div class="get-started-section">
                    <h2>Get Started Today!</h2>
                    <p>Join geth today to unlock a world of opportunities and convenience. Whether you're looking for your next big or seeking expert help for your household needs, we're here to make it happen.</p>
                    <a class="btn" href="/register">Sign Up</a>
                </div>
            </section>
        </div>
    )
}