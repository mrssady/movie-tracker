// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <h3>🎬 Movie Tracker</h3>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
