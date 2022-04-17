import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Service Details: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;