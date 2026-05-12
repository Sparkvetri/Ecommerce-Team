import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

const PaymentDetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
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
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Payment Details</h2>
      
      <div className="space-y-4 sm:space-y-5 mb-4 sm:mb-6">
        <Input 
          label="Cardholder Name" 
          type="text"
          name="cardName"
          placeholder="John Doe"
          value={formData.cardName}
          onChange={handleChange}
          required
        />
        
        <Input 
          label="Card Number" 
          type="text"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleChange}
          maxLength="19"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Input 
            label="Expiry Date (MM/YY)" 
            type="text"
            name="expiryDate"
            placeholder="12/25"
            value={formData.expiryDate}
            onChange={handleChange}
            maxLength="5"
            required
          />

          <Input 
            label="CVV" 
            type="text"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="4"
            required
          />
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-blue-700">
            🔒 Your payment information is secure and encrypted
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
        <Button variant="secondary" className="w-full sm:w-auto">
          Back
        </Button>
        <Button 
          type="submit" 
          variant="success"
          className="w-full sm:w-auto"
        >
          Complete Payment
        </Button>
      </div>
    </form>
  );
};

export default PaymentDetails;
