import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const navLinks = [
  {
    href: '#home',
    text: 'home',
    id: 1,
  },
  {
    href: '#about',
    text: 'about',
    id: 2,
  },
  {
    href: '#services',
    text: 'services',
    id: 3,
  },
  {
    href: '#tours',
    text: 'tours',
    id: 4,
  },
];

export const navIcons = [
  {
    href: 'https://www.facebook.com',
    network: 'facebook',
    id: 1,
  },
  {
    href: 'https://www.x.com',
    network: 'twitter',
    id: 2,
  },
  {
    href: 'https://www.squarespace.com',
    network: 'squarespace',
    id: 3,
  },
];

export const services = [
  {
    id: 1,
    icon: 'wallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 2,
    icon: 'tree',
    title: 'Endless Hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 3,
    icon: 'socks',
    title: 'Amazing Comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
];

export const tours = [
  {
    id: 1,
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    image: tour1,
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    date: 'October 1th, 2020',
    title: 'Best Of Java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: ' Indonesia',
    image: tour2,
    duration: 6,
    price: 1400,
  },
  {
    id: 3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    image: tour3,
    duration: 8,
    price: 5000,
  },
  {
    id: 2,
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    image: tour4,
    duration: 20,
    price: 3300,
  },
];
