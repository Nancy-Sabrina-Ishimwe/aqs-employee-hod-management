import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
      Logout
    </button>
  );
};

export default Logout;
