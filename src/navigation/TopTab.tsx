import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen, SettingScreen } from '../screens';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={HomeScreen} />
      <Tab.Screen name="setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default TopTab;