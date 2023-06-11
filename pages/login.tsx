import { useState } from 'react';
import { useRouter } from 'next/router';
import BuildClient from '@/api/buildClient';
import { AxiosError, AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '@/store/reducers/userSlice';
import Cookies from 'js-cookie';
const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const routerRegisterPage = () => {
        router.push('/register');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const client = BuildClient({ req: undefined }); // No need to pass req when making client-side requests
          const response: AxiosResponse = await client.post('/api/users/login', {
              email,
              password
          });
  
          console.log('Login response:', response.data);
          // TODO: Handle successful registration, such as redirecting to a success page
          dispatch(loginSuccess(response.data.user));
           // Set the session token in the cookie
    Cookies.set('session_token', response.data.token);
          router.push('/profile'); 
      } catch (error: any) {
        console.error('Login error:', error);
        // TODO: Handle login error, such as displaying an error message
        dispatch(loginFailure(error.response?.data?.message || error.message));
      }
    
    };

    return (
        
        <div className="flex w-screen h-screen flex-col items-center justify-center gap-9 px-3 md:px-52">
        <p className="text-2xl">Login</p>
        <div className="w-5/6 md:w-3/6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* <p className="my-8 cursor-pointer text-center font-semibold text-blue-700 hover:underline">
            Forgot your password
          </p> */}

            <button type='submit' className="rounded-lg bg-[#334155] text-white mt-10 px-16 py-2 text-center w-full">
                LOGIN
            </button>

          <p className="my-8 text-center text-sm text-navy-200 md:text-base">
            Don&apos;t have an account?{" "}
            <a onClick={routerRegisterPage} className="cursor-pointer font-semibold text-blue-700 hover:underline">
                Register here!
            </a>
          </p>
        </form>
      </div>
    </div>
    )
}

export default function Home() {
    return (
        <main>
            
            <LoginPage />
           
        </main>
    )
}