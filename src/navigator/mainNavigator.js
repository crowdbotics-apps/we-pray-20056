import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial98066Navigator from '../features/Tutorial98066/navigator';
import NotificationList98038Navigator from '../features/NotificationList98038/navigator';
import Settings98037Navigator from '../features/Settings98037/navigator';
import Settings98029Navigator from '../features/Settings98029/navigator';
import UserProfile98027Navigator from '../features/UserProfile98027/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial98066: { screen: Tutorial98066Navigator },
NotificationList98038: { screen: NotificationList98038Navigator },
Settings98037: { screen: Settings98037Navigator },
Settings98029: { screen: Settings98029Navigator },
UserProfile98027: { screen: UserProfile98027Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
