import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Shipping Address</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-6">
        <Input 
          label="Full Name" 
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        
        <Input 
          label="Country" 
          type="text"
          name="country"
          placeholder="United States"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <div className="md:col-span-2">
          <Input 
            label="Street Address" 
            type="text"
            name="streetAddress"
            placeholder="123 Main Street"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>

        <Input 
          label="City" 
          type="text"
          name="city"
          placeholder="New York"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <Input 
          label="State/Province" 
          type="text"
          name="state"
          placeholder="NY"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <Input 
          label="ZIP Code" 
          type="text"
          name="zipCode"
          placeholder="10001"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
        <Button variant="secondary" className="w-full sm:w-auto">
          Back
        </Button>
        <Button 
          type="submit" 
          variant="primary"
          className="w-full sm:w-auto"
        >
          Continue to Payment
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;
