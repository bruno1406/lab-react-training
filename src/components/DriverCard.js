import Rating from '../components/Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <img className="left" src={img} />
      <div className="right">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
