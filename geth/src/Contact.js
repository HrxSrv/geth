import React, { useState } from "react";
import "./ContactStyles.css";
import axios from "axios";

const Contact = () => {

    const [file, setFile] = useState(null);
    const [inputs, setInputs] = useState({
        name: "",
        states: "",
        email: "",
        phone: "",
        dob: "",
        occupation: "",
        experience: "",
        message: "",
        wage: " ",
        gender: " ",
    });
    console.log(file)
    console.log(inputs);
    const [phoneError, setPhoneError] = useState("");

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

        if (e.target.name === "phone") {

            const phoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            if (phoneNumber.length !== 10) {
                setPhoneError("Phone number must be 10 digits.");
            } else {
                setPhoneError("");
            }

        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (phoneError) {
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);
            for (const key in inputs) {
                formData.append(key, inputs[key]);
            }
            await axios.post("https://geth-ofyh.onrender.com/contact", formData);
        } catch (err) {

            console.error("Error submitting the form:", err);
        }
    };

    return (
        <div className="contact-section">


            <div className="contact-info">


                <div className="contact-form">
                    <h2>Contact Form (For workers) </h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />

                        <div class="gender">
                            <p>Your Gender</p>
                            <div className="gender-option">
                                <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
                                <label for="male">Male</label>
                            </div>
                            <div className="gender-option">
                                <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
                                <label for="female">Female</label>
                            </div>
                        </div>
                        <div className="File">

                            <label htmlFor="image">Select Image:</label>
                            <input
                                type="file"
                                id="file"
                                name="image"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <select id="States" name="states" onChange={handleChange}>
                            <option disabled selected> --Select State--</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Puducherry">Puducherry</option>
                        </select>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />

                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Enter your phone number" onChange={handleChange} />
                        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}

                        <label for="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" onChange={handleChange}></input>
                        <div className="Container">
                            <h2>Select Occupation</h2>

                            <select id="occupation" name="occupation" onChange={handleChange}>
                                <option disabled selected>--</option>
                                <option value="House Cleaner">House Cleaner</option>
                                <option value="Cook">Cook</option>
                                <option value="Gardener">Gardener</option>
                                <option value="Child Parenting">Child Parenting</option>
                                <option value="Laundry">Laundry</option>
                                <option value="PetCare">PetCare</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Decorator">Decorator</option>
                                <option value="Barber">Barber</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Massage Therapist">Massage Therapist</option>
                                <option value="Spa Therapist">Spa Therapist</option>
                            </select>



                        </div>

                        <label htmlFor="experience">Enter Your Experience (in years):</label>
                        <input type="text" id="experience" name="experience" placeholder="Enter your experience" onChange={handleChange} />
                        <label htmlFor="message">Wage(per hour):</label>
                        <input type="text" id="wage" name="wage" placeholder="Enter your wage" onChange={handleChange} />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" onChange={handleChange}></textarea>

                        <button type="submit" onClick={handleSubmit}>Send Details</button>
                    </form>
                </div>
                <div className="contact-details">
                    <h3>Contact Details</h3>
                    <p>
                        <strong>Address:</strong> A.D.A Colony, Prayagraj, India
                    </p>
                    <p>
                        <strong>Email:</strong> geth@gmail.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +91 9587283091
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Contact;