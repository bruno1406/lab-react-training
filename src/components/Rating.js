function Rating({ children }) {
  if (children - Math.floor(children) < 0.5) {
    children = Math.floor(children);
  } else {
    children = Math.ceil(children);
  }
  const star = '★';
  const emptyStar = '☆';
  return (
    <div className="Rating">
      {star.repeat(children) + emptyStar.repeat(5 - children)}
    </div>
  );
}

export default Rating;
