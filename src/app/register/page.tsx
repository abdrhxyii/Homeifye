'use client';
import react, {useEffect} from 'react';
import Navbar from "@/components/navbar";
import { auth, googleProvider, signInWithPopup } from "@/lib/firebase";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { setCookie } from "nookies";
import { FormEvent, useState } from "react";

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { checkAuthStatus } = useAuthStore();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus])

  const handleGoogleSignIn = async () => {
    console.log("handleGoogleSignIn")
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      setCookie(null, 'token', token, {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, 
      });
      const profileImage = user.photoURL ?? '/userdefault.jpg';
      setCookie(null, 'profileImage', profileImage, {
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });
      checkAuthStatus()
      console.log('Google Sign-In Success:', user);
      alert(`Welcome ${user.displayName}`);
    } catch (error: any) {
      console.error('Google Sign-In Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500">{error}</p>
            )}

            <div>
              <button
                type="button"
                disabled={loading}
                className={`flex w-full justify-center rounded-md ${loading ? 'bg-gray-400' : 'bg-primary'} px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
          <div className="mt-6">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <img src="/google.png" alt="Google" className="h-5 w-5" />
            <span>Sign in with Google</span>
          </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
