import { useContext } from 'react';
import Logo from '@/components/Logo';
import UserDropdown from '@/components/UserDropdown';
import { Context } from '@/context/user';

function Header() {
  const user = useContext(Context);
  return (
    <header className="header__container">
      <div className="container">
        <div className="header__container-column">
          <div className="header__container-menu">
            <Logo />
          </div>
          {user ? <UserDropdown user={user} /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
