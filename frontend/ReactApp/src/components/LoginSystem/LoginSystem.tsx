import { useLocation, useNavigate } from 'react-router-dom';
import './LogInSystem.css';
import SignUp from './SignUp/SignUp';
import SignIn from './Signin/SignIn';

const LoginSystem = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const view = queryParams.get('view') ?? 'login';

  const handleToggle = () => {
    const nextView = view === 'signup' ? 'login' : 'signup';
    navigate(`?view=${nextView}`);
  };

  return (
    <div className='LoginSystemContainer'>
      <button className='formSwitch' onClick={handleToggle}>
        {view === 'signup' ? 'Login' : 'Sign Up'}
      </button>

      {view === 'signup' && <SignUp />}
      {view === 'login' && <SignIn />}
    </div>
  );
};

export default LoginSystem;
