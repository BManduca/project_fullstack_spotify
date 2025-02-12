import logoSpotify from "../assets/logo/spotify-logo.png";

// padrao camelCase -> variável, funções...
// padrão PascalCase -> componentes

export default function Header() {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />
      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
}
