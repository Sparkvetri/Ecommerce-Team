import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

const RegisterForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName, email, password });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Register</h2>
      
      <div className="flex flex-col gap-4 sm:gap-5">
        <Input 
          label="Full Name" 
          type="text" 
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        
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
          Register
        </Button>
      </div>

      <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
        Already have an account? <a href="/login" className="text-blue-600 hover:underline font-medium">Login</a>
      </p>
    </form>
  );
};

export default RegisterForm;
