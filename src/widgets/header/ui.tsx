import Logo from "shared/Logo";
import './ui.css'

function Header() {
    return (
      <header className="header">
        <div className="wrapper">
          <Logo/>
          <p className="header__phone flexible-center">+7 910 999-99-99</p>
        </div>
      </header>
    );
  }
  
  export default Header;  