import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bio from "../../components/Bio";
import ImgPerfil from "../../components/ImgPerfil";
import Items from "../../components/Items";
import Name from "../../components/Name";
import "./style.scss";
function Login() {
  const { login } = useParams();
  const [usePerfil, setPerfil] = useState({});
  const [useLogin, setLogin] = useState(true);
  useEffect(() => {
    handleSearchPerfil();
  }, []);
  const handleSearchPerfil = async () => {
    const perfil = await fetch(`https://api.github.com/users/${login}`);
    const perfilJson = await perfil.json();
    setPerfil(perfilJson);
    setLogin(false);
  };
  console.log(usePerfil);
  return (
    <div className="wrapperPerfil">
      {useLogin ? (
        <p>login...</p>
      ) : (
        <>
          <div className="wrapperImg">
            <ImgPerfil img={usePerfil.avatar_url} />
          </div>
          <div className="wrapperInfo">
            <div className="wrapperName">
              <Name name={usePerfil.name} />
            </div>
            <div className="wrapperBio">
              <Bio bio={usePerfil.bio} />
            </div>
            <div className="wrapperItems">
              <Items
                location={usePerfil.location}
                followers={usePerfil.followers}
                perfilTwiter={usePerfil.twitter_username}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Login;
