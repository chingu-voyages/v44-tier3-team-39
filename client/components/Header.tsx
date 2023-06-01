import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const routerLoginPage = () => {
        router.push('/login');
      };

      const routerRegisterPage = () => {
        router.push('/register');
      };

    return (
      <div className='flex justify-between items-center shadow-md w-full bg-white mb-5 px-10 sticky top-0'>
        <div className='font-bold text-2xl p-4'>Milestone</div>
        <div className='text-blue-400 p-4'>
            <a onClick={routerLoginPage} className="mr-4 cursor-pointer">Login</a>
            <a onClick={routerRegisterPage} className="cursor-pointer">Register</a>
        </div>
      </div>
    );
  };
  
  export default Header;