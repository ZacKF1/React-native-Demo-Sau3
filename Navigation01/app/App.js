import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenDetail from './views/screenDetail/screen';
import Setting from './views/setting/screen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Home Screen</Text>
        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Detail',{name:'Prite ssss',last_name:'nutwilai',age:10,data:{job:'programmer'}})} >
          <Text>Go to Screen Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail:{
    screen:ScreenDetail
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Setting: Setting,
});

export default createAppContainer(TabNavigator);