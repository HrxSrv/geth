import React, { useState, useEffect } from 'react';
import "./hireworker.css";
import logo5 from "./w1_2.jpg";
import logo4 from "./w2.jpg"
import logo3 from "./w3.jpg"
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "./axios";
import { useLocation } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import logo1 from "./component/arrow-up.png"
import logo2 from "./component/down-arrow.png"
import star from "./component/star.png"
import star1 from "./component/star1.png"
import star2 from "./component/star2.png"
import star3 from "./component/star3.png"
import { useData } from './DataContext';
import axios from 'axios';
const Hireworker = () => {

    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }
    const [isExpanded1, setisExpanded1] = useState(false);
    function navTgll() {
        setisExpanded1(!isExpanded1)
    }
    const [isExpanded2, setisExpanded2] = useState(false);
    function navTglll() {
        setisExpanded2(!isExpanded2)
    }
    const [isExpanded3, setisExpanded3] = useState(false);
    function navTgllll() {
        setisExpanded3(!isExpanded3)
    }
    const [isExpanded4, setisExpanded4] = useState(false);
    function navTglllll() {
        setisExpanded4(!isExpanded4)
    }
    const [checkedGender, setCheckedGender] = useState({
        Female: false,
        Male: false,
    });
    const [checkedWages, setCheckedWages] = useState({
        Under_1000: false,
        Under_1200: false,
        Under_1400: false,
        Under_1600: false,
        Under_1800: false,
        Under_2000: false,
    });
    const [checkedAge, setCheckedAge] = useState({
        Twenty_25: false,
        Twentyfive_30: false,
        Thirty_35: false,
        Thirtyfive_40: false,
        Forty_45: false,
        Fortyfive_50: false,
    });
    const [checkedWe, setCheckedWe] = useState({
        One_5: false,
        Five_10: false,
        Above_10: false,
    });
    // console.log(checkedGender)
    const handleCheckboxChange = (season) => {
        setCheckedGender((prevGender) => ({
            ...prevGender,
            [season]: !prevGender[season],
        }));
    };
    const handleCheckboxChangeWages = (wage) => {
        setCheckedWages((prevWages) => ({
            ...prevWages,
            [wage]: !prevWages[wage],
        }));
    };
    const handleCheckboxChangeAge = (age) => {
        setCheckedAge((prevAge) => ({
            ...prevAge,
            [age]: !prevAge[age],
        }));
    };
    const handleCheckboxChangeWe = (we) => {
        setCheckedWe((prevWe) => ({
            ...prevWe,
            [we]: !prevWe[we],
        }));
    };

    const [users, setUsers] = useState([]);
    // console.log(users)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/hireworkers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    const openPopup = (user, index) => {
        setSelectedUser(user);
        setSelectedUserIndex(index);
        console.log(index)
        setPopupOpen(true);
    };
    // console.log(selectedUser._id);
    // console.log(isPopupOpen)

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedUser(null);
    };
    const handleNext = () => {
        if (users.length === 0) {
            // Handle the case when there are no users
            return;
        }
        const nextIndex = (selectedUserIndex + 1) % users.length;
        setSelectedUser(users[nextIndex]);
        setSelectedUserIndex(nextIndex);
    };
    const { userData } = useData();
    console.log(userData)
    const handleConfirmHiring = async () => {

        try {
            const hiringData = {
                uname: userData.username,
                workerid: selectedUser._id,
            };
            await axios.post("http://localhost:8000/confirmhire", hiringData);
        }
        catch (error) {
            console.error('Error confirming hiring:', error);
        }
        closePopup();
    };
    function calculateAge(dob) {
        // Parse the DOB string into a Date object
        const dobDate = new Date(dob);

        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in milliseconds
        const timeDifference = currentDate - dobDate;

        // Calculate the age in years
        const age = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));

        return age;
    }

    const dobString = !selectedUser ? "2022-12-07T00:00:00.000Z" : selectedUser.dob;
    const age = calculateAge(dobString);
    // console.log(dobString)
    // console.log(age)

    let imgpath = " ";
    let imagepath = " ";
    const UserProfileContainer = ({ user, onHireClick }) => (
        <div class="Worker-card">
            <div className="imagepath">

                {imgpath = user ? user.img : " "}
                {imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath}
            </div>
            {/* {console.log(imagepath)} */}
            <img src={imagepath} alt="Worker 1" />
            <div className='star-name'>
                <h3>{user.name}</h3>
                <div>
                    <span>5</span>
                    <img src={star} alt="star" className='star-img' />
                </div>
            </div>
            <p>Wage: {user.wage}/hour</p>
            <p>{user.occupation}</p>
            <p>Location: {user.states}</p>
            <button class="hire-button" onClick={onHireClick}>Hire</button>
        </div>
    );
    const renderUserProfiles = () => {
        return users.map((user, index) => (
            <UserProfileContainer key={index} user={user} onHireClick={() => openPopup(user, index)} />
        ));

    };




    return (
        <div className="rightbars">
            <div className={`rightBar ${isPopupOpen ? 'blur' : ''}`}>
                <div className="ContaineR">


                    <div className="item">
                        <p>Filter</p>
                        <hr></hr>
                        <div className="filters">
                            <div className="filter-1">
                                <span>Gender</span>
                                {isExpanded ? <img src={logo1} alt=" " onClick={navTgl} />
                                    :
                                    <img src={logo2} alt=" " onClick={navTgl} />}
                            </div>
                            <div className={isExpanded ? "boxes" : "boxes-hide"}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedGender.Female} onChange={() => handleCheckboxChange('Female')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Female</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedGender.Male} onChange={() => handleCheckboxChange('Male')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Male</span>}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="filters">
                            <div className="filter-1">
                                <span>Wages</span>
                                {isExpanded1 ? <img src={logo1} alt=" " onClick={navTgll} />
                                    :
                                    <img src={logo2} alt=" " onClick={navTgll} />}
                            </div>
                            <div className={isExpanded1 ? "boxes-2" : "boxes-hide"}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_1000} onChange={() => handleCheckboxChangeWages('Under_1000')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 1000</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_1200} onChange={() => handleCheckboxChangeWages('Under_1200')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 1200</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_1400} onChange={() => handleCheckboxChangeWages('Under_1400')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 1400</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_1600} onChange={() => handleCheckboxChangeWages('Under_1600')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 1600</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_1800} onChange={() => handleCheckboxChangeWages('Under_1800')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 1800</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWages.Under_2000} onChange={() => handleCheckboxChangeWages('Under_2000')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Under 2000</span>}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="filters">
                            <div className="filter-1">
                                <span>Age</span>
                                {isExpanded2 ? <img src={logo1} alt=" " onClick={navTglll} />
                                    :
                                    <img src={logo2} alt=" " onClick={navTglll} />}
                            </div>
                            <div className={isExpanded2 ? "boxes-2" : "boxes-hide"}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Twenty_25} onChange={() => handleCheckboxChangeAge('Twenty_25')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>20-25</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Twentyfive_30} onChange={() => handleCheckboxChangeAge('Twentyfive_30')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>25-30</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Thirty_35} onChange={() => handleCheckboxChangeAge('Thirty_35')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>30-35</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Thirtyfive_40} onChange={() => handleCheckboxChangeAge('Thirtyfive_40')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>35-40</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Forty_45} onChange={() => handleCheckboxChangeAge('Forty_45')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>40-45</span>}
                                    />
                                    {/* <FormControlLabel
                                        control={<Checkbox checked={checkedAge.Fortyfive_50} onChange={() => handleCheckboxChangeAge('Fortyfive_50')} style={{ color: 'white' }} />}
                                        label="45-50"
                                    /> */}
                                </FormGroup>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="filters">
                            <div className="filter-1">
                                <span>Region</span>
                                {isExpanded3 ? <img src={logo1} alt=" " onClick={navTgllll} />
                                    :
                                    <img src={logo2} alt=" " onClick={navTgllll} />}
                            </div>
                            <div className={isExpanded3 ? "State" : "State-hide"}>
                                <select id="states" name="states"
                                // onChange={(e) => {
                                //     setAddress((prevAddress) => ({
                                //         ...prevAddress,
                                //         state: e.target.value
                                //     }));
                                // }}

                                >
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
                            </div>
                        </div>
                        <hr></hr>
                        <div className="filters">
                            <div className="filter-1">
                                <span>Work Experience</span>
                                {isExpanded4 ? <img src={logo1} alt=" " onClick={navTglllll} />
                                    :
                                    <img src={logo2} alt=" " onClick={navTglllll} />}
                            </div>
                            <div className={isExpanded4 ? "boxes" : "boxes-hide"}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWe.One_5} onChange={() => handleCheckboxChangeWe('One_5')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>1-5 years</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWe.Five_10} onChange={() => handleCheckboxChangeWe('Five_10')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>5-10 years</span>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={checkedWe.Above_10} onChange={() => handleCheckboxChangeWe('Above_10')} style={{ color: 'white' }} />}
                                        label={<span style={{ color: 'white' }}>Above 10 years</span>}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='hire-profile'>
                    <div class="Worker-profiles">
                        {renderUserProfiles()}
                    </div>
                </div>
            </div>
            <div >

                {isPopupOpen && (
                    <div className="overlay" onClick={closePopup}></div>
                )}
                {isPopupOpen && (
                    <div className="hire">
                        <div className="popup">
                            <div className="popup-content">
                                <span className="close" onClick={closePopup}>
                                    &times;
                                </span>
                                <div className="row">
                                    <div className="profile-nav ">

                                        <div className="user-heading round">

                                            <img src={logo5} alt=" " />


                                            <div className="bio-data">
                                                <div className="Buttons">
                                                    <button onClick={handleConfirmHiring}>Confirm Hiring</button>
                                                    <button onClick={handleNext}>Next</button>    
                                                </div>
                                                <label for="dob">Hire date :</label>
                                                <input type="date" id="dob" name="dob" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="bio-graph-info">
                                    <h1>Bio Graph</h1>

                                    <div className="bio-row">
                                        <p><span>Name </span>: {selectedUser && selectedUser.name}  </p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Wage </span>: {selectedUser && selectedUser.wage}/hour </p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Region </span>: {selectedUser && selectedUser.states}  </p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Age</span>: {selectedUser && age}  </p>
                                    </div>
                                    <hr></hr>

                                    <div className="bio-row">
                                        <p><span>WE </span>: {selectedUser && selectedUser.experience} years </p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Email </span>: {selectedUser && selectedUser.email}</p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Mobile </span>: {selectedUser && selectedUser.phone}</p>
                                    </div>
                                    <hr></hr>
                                    <div className="bio-row">
                                        <p><span>Message </span>: {selectedUser && selectedUser.message}</p>
                                    </div>
                                    <hr></hr>

                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hireworker;