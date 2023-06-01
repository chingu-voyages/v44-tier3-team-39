import { useState } from 'react';
import { useRouter } from 'next/router';

import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
    const router = useRouter();

    const routerRegisterPage = () => {
        router.push('/register');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add login logic here
        console.log('Login form submitted!');
    };

    return (
        
        <div className="flex w-screen h-screen flex-col items-center justify-center gap-9 px-3 md:px-52">
        <h4>Login</h4>
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

          <button type="submit" className="w-full">
            login
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
            <Header />
            <LoginPage />
            <Footer />
        </main>
    )
}