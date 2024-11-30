import SectionLinks from './SectionLinks';
import SocialLinks from './SocialLinks';
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className='section footer'>
      <SectionLinks placement='footer' />
      <SocialLinks placement='footer' />
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <br />
        <span id='date'>{currentYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
