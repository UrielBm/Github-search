import "./style.scss";
function Input({ callback }) {
  const handleOnChange = (e) => {
    const { value } = e.target;
    callback(value);
  };
  return (
    <input
      className="input"
      placeholder="Buscar perfil..."
      onChange={handleOnChange}
    />
  );
}

export default Input;
