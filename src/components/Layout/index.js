import { supabase } from '../../config/SupabaseClient';
import './layout.css';
import { useLocation, useNavigate } from 'react-router';

const Layout = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const authentication = localStorage.getItem(
    'sb-vgllznvnthexhnmexhcq-auth-token'
  );
  const user = authentication && JSON.parse(authentication)?.user;
  console.log('location', pathname);
  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <div className='layout'>
        <div className='title'>Famous Dishes</div>
        {user?.aud === 'authenticated' && pathname === '/dashboard' && (
          <button className='button' onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
export default Layout;
