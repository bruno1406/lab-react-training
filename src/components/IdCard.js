function IdCard(props) {
  return (
    <div>
      <div className="IdCard box">
        <img src={props.picture} alt="profile pic"></img>
        <div>
          <strong>First name</strong>: {props.firstName}
          <br></br>
          <strong>Last name</strong>: {props.lastName}
          <br></br>
          <strong>Gender</strong>: {props.gender}
          <br></br>
          <strong>Height</strong>: {props.height}
          <br></br>
          <strong>Birth</strong>: {props.birth.toDateString()}
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default IdCard;
