const Rating = ({ value = 0, max = 5 }) => {
  return (
    <div className="rating">
      {value} / {max}
    </div>
  );
};

export default Rating;
