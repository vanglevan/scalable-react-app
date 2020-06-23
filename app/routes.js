import HomePage from './containers/HomePage/Loadable';
import FeaturePage from './containers/FeaturePage/Loadable';
import NotFoundPage from './containers/NotFoundPage/Loadable';

import { HOME, FEATURES, PAGE_NOT_FOUND } from './utils/constants/routes';

const publicRoutes = [
  {
    path: HOME,
    exact: true,
    component: HomePage,
    menu: false,
    label: "Trang chủ",
    permissionRequired: true,
    icon: "home",
  },
  {
    path: FEATURES,
    exact: true,
    component: FeaturePage,
    menu: false,
    label: "Feature Page",
    permissionRequired: true,
    icon: "home",
  },
  {
    path: PAGE_NOT_FOUND,
    exact: true,
    component: NotFoundPage,
    menu: false,
    label: "Page Not Found",
    permissionRequired: false,
    icon: "home",
  },
];

const privateRoutes = []

const authRoutes = []

export default {
  publicRoutes,
  privateRoutes,
  authRoutes,
}
