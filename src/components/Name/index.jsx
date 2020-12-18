import "./style.scss";
function Name({ name }) {
  return (
    <h2>
      <span className="infodata">Nombre: </span>
      {name}
    </h2>
  );
}

export default Name;
