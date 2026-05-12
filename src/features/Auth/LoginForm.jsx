import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Login</h2>
      
      <div className="flex flex-col gap-4 sm:gap-5">
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full mt-2 sm:mt-4"
        >
          Login
        </Button>
      </div>

      <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
        Don't have an account? <a href="/register" className="text-blue-600 hover:underline font-medium">Sign up</a>
      </p>
    </form>
  );
};

export default LoginForm;
