import React from 'react';
import './About.css'
import profile from '../../images/profile/profile.jpg';
const About = () => {
    return (
        <div className='container about'>
            <img className='img-style' src={profile} alt="" />
            <div>
                <h2>About:</h2>
                <h4>My Name: Md. Al-amin Hossain Jibon</h4>
                <h4>Address: Rangpur</h4>
                <h4>Phone: 0176..........</h4>
                <h4>Email: <a href="https://www.gmail.com">mdalamin7622@gmail.com</a></h4>

            </div>
            <div>
                <h2>My Goal:</h2>
                <p>I am a simple man, but my dream is very big.
                    My main goal is to give some good gifts to the nation through science education.
                    I am a simple man, but my dream is very big.
                    My main goal is to give some good gifts to the nation through science education.
                </p>
            </div>
        </div>
    );
};

export default About;