import { useState } from 'react';
import { useRouter } from 'next/router';

import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
    const router = useRouter();

    const routerLoginPage = () => {
        router.push('/login');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add logic here
        console.log('Registration form submitted!');
    };

    return (
        
        <div className="flex w-screen h-screen flex-col items-center justify-center gap-9 px-3 md:px-52">
        <p className="text-2xl">Register here to create an account!</p>
        <div className="w-5/6 md:w-3/6">

        <form onSubmit={handleSubmit}>

          <div className="relative">
            <input
              type="firstName"
              placeholder="First Name"
              className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <input
              type="lastName"
              placeholder="Last Name"
              className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
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
                REGISTER
            </button>

          <p className="my-8 text-center text-sm text-navy-200 md:text-base">
            Already have an account?{" "}
            <a onClick={routerLoginPage} className="cursor-pointer font-semibold text-blue-700 hover:underline">
                Login here!
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
            <RegisterPage />
            <Footer />
        </main>
    )
}