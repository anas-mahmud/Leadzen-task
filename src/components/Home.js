import React, { useEffect, useState } from 'react';
import Header from './Header';
import User from './User';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <Header></Header>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Home;