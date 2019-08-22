import {createAppContainer, createStackNavigator} from 'react-navigation';
import SpeakerModal from '../screens/Speaker';
import NavigationLayout from './NavigationLayout.ios';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal,
    },
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
