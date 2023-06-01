import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const routerLoginPage = () => {
        router.push('/login');
      };

      const routerRegisterPage = () => {
        router.push('/register');
      };

      const routerLandingPage = () => {
        router.push('/landing');
      };

    return (
      <div className='flex justify-between items-center shadow-md w-full bg-white mb-5 px-10 sticky top-0'>
        <a onClick={routerLandingPage} className='font-bold text-2xl p-4 cursor-pointer'>Milestone</a>
        <div className='text-blue-400 p-4'>
            <a onClick={routerLoginPage} className="mr-4 cursor-pointer">Login</a>
            <a onClick={routerRegisterPage} className="cursor-pointer">Register</a>
        </div>
      </div>
    );
  };
  
  export default Header;