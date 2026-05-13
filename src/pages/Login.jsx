import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock login
    dispatch(loginSuccess({ email, name: email.split('@')[0] }));
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold font-serif text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">Please enter your details to sign in</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-red-600 rounded border-gray-300" />
              <label className="ml-2 text-gray-600">Remember me</label>
            </div>
            <a href="#" className="font-medium text-red-600 hover:text-red-500">Forgot password?</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
          >
            Sign in
          </motion.button>
        </form>

        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            Don't have an account? {' '}
            <Link to="/register" className="font-bold text-red-600 hover:text-red-500 underline-offset-4 hover:underline transition-all">
              Sign up for free
            </Link>
          </p>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-bold tracking-widest">Or test access</span></div>
          </div>

          <button
            onClick={() => {
              dispatch(loginSuccess({ email: 'admin@exclusive.com', name: 'Admin Master', role: 'admin' }));
              navigate('/admin');
            }}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors shadow-xl flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Login as Admin
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
