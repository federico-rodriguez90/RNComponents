import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Inputs',
    icon: 'document-text-outline',
    component: 'InputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionList',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinte Scroll',
    icon: 'download-outline',
    component: 'InfiniteScroll',
  },
];
