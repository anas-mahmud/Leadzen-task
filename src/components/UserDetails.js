import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const { id, name, email, address, phone, website, company } = useLoaderData();

    return (
        <div className='bg-zinc-200 shadow-lg mt-10 py-10 px-20 rounded-lg'>
            <div className='flex justify-between m-5 '>
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
                    <Link to={`/`}><button className="btn btn-primary">Back</button></Link>
                </div>
            </div>
            <div className="divider"></div>
            <div className='text-left px-16 mt-10'>
                <h2 className='text-2xl font-semibold mb-3'>Description</h2>
                <p className='mb-5'>Lorem invidunt sanctus sit justo sea sed. Accusam justo no dolore nonumy nonumy sit takimata erat erat, labore aliquyam duo sea et, sit sadipscing rebum erat ut dolor vero kasd, et justo consetetur ea gubergren, et no sit dolore labore magna gubergren, voluptua et aliquyam accusam at takimata et diam..</p>

                <h2 className='text-2xl font-semibold mb-3'>Company</h2>
                <p><span className='font-medium'>Name:</span> {company.name}</p>
                <p><span className='font-medium'>Catch Phrase:</span> {company.catchPhrase}</p>
                <p><span className='font-medium'>BS:</span> {company.bs}</p>

                <div className='flex flex-row gap-96 mt-5'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-lg font-medium'>Contact Person</h2>
                            <p>{name}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>Website</h2>
                            <p>{website}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>Email</h2>
                            <p>{email}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>Phone</h2>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-lg font-medium'>Street</h2>
                            <p>{address.street}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>Suite</h2>
                            <p>{address.suite}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>City</h2>
                            <p>{address.city}</p>
                        </div>

                        <div>
                            <h2 className='text-lg font-medium'>Zip Code</h2>
                            <p>{address.zipcode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;