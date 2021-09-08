function BoxColor({ r, g, b, col }) {
  if (g === 0) {
    g = '00';
  }
  if (r === 0) {
    r = '00';
  }
  if (b === 0) {
    b = '00';
  }

  return (
    <div
      className="BoxColor box"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: `${col}` }}
    >
      rgb({r},{g},{b})
      <br />#{r.toString(16)}
      {g.toString(16)}
      {b.toString(16)}
    </div>
  );
}

export default BoxColor;
