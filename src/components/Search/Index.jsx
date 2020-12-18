import { useState } from "react";
import Button from "../Botton/Index";
import Input from "../Input/Index";
import { Link } from "react-router-dom";
function Search() {
  const [usePerfil, setPerfil] = useState("");
  const HandleOnChange = (perfil) => {
    setPerfil(perfil);
  };
  return (
    <>
      <Input callback={HandleOnChange} />{" "}
      <Link to={`/usuario/${usePerfil}`}>
        <Button />
      </Link>
    </>
  );
}
export default Search;
