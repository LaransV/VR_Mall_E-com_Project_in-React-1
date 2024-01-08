import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import homecareposter from '../../image/Home/homecare-poster.jpg';
import logo from '../../image/logo.png';

function Homecare() {
    const [homecare, setHomecare] = useState([]);
   

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('jsonData')) || [];
        setHomecare(storedData[10]?.homecare || [])

    }, []);

    return (
        <div>
            <Navbar/>
            
            <img src={homecareposter} alt='home-care-poster' style={{width:"100%"}} ></img>
            <div id='list'>
            {homecare.map((data, index) => (
                <div className='products' key={index}>
                        <div className="logo1">
                            <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "5px 15px 10px 10px", display: "inline", marginTop: '15px' }}></img>
                            <h5 style={{ color: 'black', marginTop: '20px' }}>VR MALL</h5>
                        </div>
                        <hr />
                        <div className='product-img'>
                            <img src={data.image} alt={data.name} />
                        </div>
                        <hr />
                        <div className='body'>
                            <div className='product-body'>
                                <h5>{data.name}</h5>
                                <p>Price : ₹ {data.price}</p>
                            </div>
                            <hr />
                            <div className='product-btn'>
                                <button className="btn btn-primary"> <FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
                            </div>
                        </div>
                    </div>
            ))}
            </div>

                <Footer/>
        </div>
    );
}

export default Homecare;
