import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simple mock register
    dispatch(registerSuccess({ email, name }));
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
          <h2 className="text-4xl font-bold font-serif text-gray-900 tracking-tight">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">Join Shopzy and start shopping</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:ring-2 focus:ring-red-500 focus:bg-white transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
          >
            Sign up
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? {' '}
          <Link to="/login" className="font-bold text-red-600 hover:text-red-500 underline-offset-4 hover:underline transition-all">
            Sign in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
