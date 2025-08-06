import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}


export default Dashboard;
