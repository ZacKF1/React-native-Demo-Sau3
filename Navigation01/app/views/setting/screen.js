import React from 'react';
import { View, Text } from 'react-native';

class Setting extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Setting</Text>
                </View>
            );
    }
}
export default Setting;