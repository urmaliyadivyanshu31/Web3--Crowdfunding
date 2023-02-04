import { createCampaign, dashboard, about, profile} from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'about',
    imgUrl: about,
    link: '/',
    disabled: "/about",
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
];