import { navLinks } from '../data';

const SectionLinks = ({ placement }) => {
  return (
    <ul className={`${placement}-links`} id={`${placement}-links`}>
      {navLinks.map((links) => {
        const { href, text, id } = links;
        return (
          <li key={id}>
            <a href={href} rel='noreferrer' className={`${placement}-link`}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SectionLinks;
