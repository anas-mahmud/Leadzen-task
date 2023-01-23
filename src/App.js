import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      {
        users.map(user => <User
          key={user.id}
          user={user}
        ></User>)
      }

    </div>
  );
}

export default App;
