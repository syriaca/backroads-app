import { navIcons } from '../data';

const SocialLinks = ({ placement }) => {
  return (
    <>
      <ul className={`${placement}-icons`}>
        {navIcons.map((icons) => {
          const { href, id, network } = icons;
          return (
            <li key={id}>
              <a href={href} rel='noreferrer' target='_blank' className={`${placement}-icon`}>
                <i className={`fab fa-${network}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialLinks;
