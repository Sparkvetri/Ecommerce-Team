const PriceTag = ({ price, currency = '$' }) => {
  return (
    <span className="price-tag">
      {currency}{price}
    </span>
  );
};

export default PriceTag;
