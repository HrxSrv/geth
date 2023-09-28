import React from "react";
import logo1 from "./w1_2.jpg";
import logo2 from "./w2.jpg"
import logo3 from "./w3.jpg"
export default function WorkerSection() {

    return (
        <div>
            <section id="browse-workers" class="browse-workers">
                <div class="search-bar">
                    <input type="text" placeholder="Search for workers..." />
                    <button>Search</button>
                </div>
                <div class="worker-profiles">
                    <div class="worker-card">
                        <img src={logo1} alt="Worker 1" />
                        <h3>John Doe</h3>
                        <p>Plumber</p>
                        <p>Location: New York, NY</p>
                        <button class="hire-button">Hire</button>
                    </div>

                    <div class="worker-card">
                        <img src={logo2} alt="Worker 2" />
                        <h3>Jane Smith</h3>
                        <p>Barber</p>
                        <p>Location: Los Angeles, CA</p>
                        <button class="hire-button">Hire</button>
                    </div>
                    <div class="worker-card">
                        <img src={logo3} alt="Worker 2" />
                        <h3>Jane Smith</h3>
                        <p>Electrician</p>
                        <p>Location: Los Angeles, CA</p>
                        <button class="hire-button">Hire</button>
                    </div>

                </div>
            </section>
        </div>
    )
}