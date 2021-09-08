function Greetings({ lang, children }) {
  if (lang == 'de') {
    return <div className="box">Hallo {children}</div>;
  } else {
    return <div className="box">Bonjour {children}</div>;
  }
}

export default Greetings;
