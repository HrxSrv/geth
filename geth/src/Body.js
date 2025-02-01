import React from "react";
import { Link } from "react-router-dom";

export default function Body() {



    return (
        <div>
            <div className="body-m">
                <section id="home" class="hero">
                    <div class="hero-content">
                        <h1>Find the Right Workers for Your Needs</h1>
                        <p>Hire skilled professionals quickly and easily.</p>
                        <div class="cta-buttons">
                            <Link to="/hireworkers" class="cta-button">Browse Workers</Link>
                        </div>
                    </div>
                   
                </section>
            </div>
           
        </div>
    )


}