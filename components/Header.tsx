import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/store/reducers/userSlice';
import { RootState } from '@/store/rootReducer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';
import axios, { AxiosRequestConfig } from 'axios';
import BuildClient from '@/api/buildClient';



async function fetchData() {
  const token = Cookies.get("session_token");
  console.log(token)
  try {
    const client = BuildClient({});
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await client.post('/api/users/logout', config);
    const data = response.data;
    // Handle the response data
    console.log(data)
  } catch (error) {
    // Handle the error
    console.error(error);
  }
}
const Header = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    fetchData()
    Cookies.remove('session_token');
    // Dispatch the logout action
    dispatch(logout());
   
    // TODO: Perform any necessary cleanup or redirection
    router.push('/login');
  };

  const routerLoginPage = () => {
    router.push('/login');
  };

  const routerRegisterPage = () => {
    router.push('/register');
  };

  const routerLandingPage = () => {
    router.push('/');
  };
  const routerProfilePage = () => {
    router.push('/profile');
  };

  return (
    <div className="flex z-10 justify-between items-center shadow-md w-full bg-white px-10 sticky top-0">
      <Link href="/" passHref>
        <span
          onClick={routerLandingPage}
          className="font-bold text-2xl p-4 cursor-pointer"
        >
          Milestone
        </span>
      </Link>
      <div className="text-blue-400 p-4">
        {isAuthenticated ? (
          <>
           <span onClick={routerProfilePage} className="mr-4 cursor-pointer">
          Profile
        </span>
          <span onClick={handleLogout} className="mr-4 cursor-pointer">
            Logout
          </span>
         
        </>
        ) : (
          <>
            <span onClick={routerLoginPage} className="mr-4 cursor-pointer">
              Login
            </span>
            <span onClick={routerRegisterPage} className="cursor-pointer">
              Register
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
