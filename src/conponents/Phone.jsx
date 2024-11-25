import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone =useLoaderData()
    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;