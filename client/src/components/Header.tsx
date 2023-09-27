import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBtc, FaSignOutAlt } from 'react-icons/fa';

interface ActiveLinkProps {
  isActive: boolean;
};

const Header: FC = () => {
  const isAuth: boolean = true

  const activeLink = ({isActive}: ActiveLinkProps): string =>
    isActive ? 'text-white' : 'text-white/50';

  return (
    <header className="flex items-center  p-4 shadow-sm bg-slate-800 backdrop-blur-sm">
      <Link>
        <FaBtc size={20}/>
      </Link>
      {/*Menu*/}
      {
        isAuth && (
          <nav className='ml-auto mr-10'>
            <ul className="flex items-center gap-5 ">
              <li>
                <NavLink to={'/'} className={activeLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/transactions'} className={activeLink}>Transactions</NavLink>
              </li>
              <li>
                <NavLink to={'/categories'} className={activeLink}>Categories</NavLink>
              </li>

            </ul>
          </nav>
        )
      }
      {/*Actions*/}
      {
        isAuth ? (
          <button className='btn btn-red'>
            <span>Log Out</span>
            <FaSignOutAlt/>
          </button>
        ) : (
          <Link className='py-2 text-white/50 hover:text-white ml-auto' to={'auth'}>
            Log In / Sign In
          </Link>
        )
      }
    </header>
  );
};

export default Header;