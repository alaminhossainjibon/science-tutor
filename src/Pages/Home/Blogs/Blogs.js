import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container questions-section '>
            <div className='questions'>
                <h2>Q.1: Difference between authorization and authentication</h2>
                <p>Answer: Simply put, authentication is the process of verifying someone, where authentication is the process of verifying which user has access to a particular application, file and data. The situation is like an airline that has to decide which person can come on board.</p>
                <br />
                <h2>Q.2: Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Answer: Firebase provides authentication backend services, an easy-to-use SDK, and a UI library built into your app to authenticate users. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter and many more.</p>
                <br />
                <h2>Q.3: What other services does firebase provide other than authentication</h2>
                <p>Answer: <span>In order to use Firebase storage, we need to authenticate a user through Firebase authentication. Default security rules require user authentication. Firebase storage is basically a powerful and simple object storage, where you can easily save your files.</span> </p>
            </div>
        </div>
    );
};

export default Blogs;