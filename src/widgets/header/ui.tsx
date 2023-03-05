import CarouselFade from "entities/CarouselFade/ui";
import Logo from "shared/Logo";
import './style.scss'

function Header() {
    return (
      <header className="header">
        <CarouselFade />
        <div className="header_wrapper">
          <div className="header_container">
            <Logo/>
            <p className="header__phone flexible-center">+7 910 999-99-99</p>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;  