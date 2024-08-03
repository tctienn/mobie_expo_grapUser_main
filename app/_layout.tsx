import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './tab/index'
import Tab from './tab/tab'
import TabDEMO from './(tabs)/_layout'



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

{/* /// cấu hình draw/// */ }
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Home',
          title: '',
        }}
        component={Tab}
      />





      {/* <Drawer.Screen
        name="homemain"
        options={{
          drawerLabel: 'Home demo',
          title: 'Overview',
        }}
        component={Ay}
      /> */}

    </Drawer.Navigator>
  );
}
{/* /// cấu hình router/// */ }
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />


      {/* Thêm các màn hình khác vào đây nếu cần */}
    </Stack.Navigator>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
