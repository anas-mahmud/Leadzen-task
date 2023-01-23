import React from 'react';

const User = ({ user }) => {
    console.log(user);
    const { name, address } = user;

    return (
        <div className='grid grid-cols-5 m-5 shadow-lg py-10 px-20 bg-zinc-200 rounded-lg'>
            <h2 className='text-lg font-medium flex items-center justify-center'>Hello Travels</h2>
            <div>
                <h1 className='text-lg font-medium'>Contact</h1>
                <p>{name}</p>
            </div>
            <div>
                <h1 className='text-lg font-medium'>Street</h1>
                <p>{address.street}</p>
            </div>
            <div>
                <h1 className='text-lg font-medium'>City</h1>
                <p>{address.city}</p>
            </div>
            <div>
                <button className="btn btn-primary">Details</button>
            </div>
        </div>
    );
};

export default User;