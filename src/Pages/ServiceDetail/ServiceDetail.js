import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Service Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-info'>Proceed Checkout</button>
                </Link>
            </div>

            <div className='tutor-detail'>
                <h1>Tutor Details: </h1>
                <h4>Hi!! my all student Welcome!!!</h4>
                <p>Here all kinds of science department tuition is done. So come to our website now without delay. Science Tutor offers a variety of services here at low cost.</p>
            </div>
        </div>
    );
};

export default ServiceDetail;