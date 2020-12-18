import "./style.scss";
import twitter from "../../assets/twitter.svg";
function Items({ location, followers, perfilTwiter }) {
  return (
    <>
      <p className="wrapperData">
        <span className="infodata">location: </span>
        {location}
      </p>
      <p className="wrapperData">
        <span className="infodata">followers: </span>
        {followers}
      </p>
      {perfilTwiter == null ? (
        <></>
      ) : (
        <>
          <a className="link" href={`https://twitter.com/${perfilTwiter}`}>
            <img className="icon" src={twitter} alt="logoTwitter" />
          </a>
        </>
      )}
    </>
  );
}

export default Items;
