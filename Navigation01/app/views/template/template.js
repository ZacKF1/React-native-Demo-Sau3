import React from 'react';
import { View, Text } from 'react-native';

class Template extends React.Component{
    constructor(props){

    }
    render(){
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Template</Text>
                </View>
            );
    }
}
export default Template;