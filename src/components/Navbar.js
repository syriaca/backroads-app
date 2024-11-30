import logo from '../images/logo.svg';
import SectionLinks from './SectionLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <SectionLinks placement='nav' />
        <SocialLinks placement='nav' />
      </div>
    </nav>
  );
};

export default Navbar;
