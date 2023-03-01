import CarouselFade from "entities/CarouselFade/ui";
import Logo from "shared/Logo";
import './style.scss'

function Header() {
    return (
      <header className="header">
        <CarouselFade />
        <div className="wrapper">
          <div className="container">
            <Logo/>
            <p className="header__phone flexible-center">+7 910 999-99-99</p>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;  