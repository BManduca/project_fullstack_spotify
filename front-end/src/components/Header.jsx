import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

// padrao camelCase -> variável, funções...
// padrão PascalCase -> componentes

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
}
