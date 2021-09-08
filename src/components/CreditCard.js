function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  if (type === 'Master Card') {
    type = '/public/img/master-card.svg';
  } else {
    type = '/public/img/visa.png';
  }
  return (
    <div>
      <div
        className="CreditCard"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="type">
          <img src={type} />
        </div>
        <div className="number">
          •••• •••• •••• {number.substr(number.length - 5, 4)}
        </div>
        <div>
          Expires {expirationMonth}/{expirationYear} {bank}
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
