import React from 'react';
import { View, Text } from 'react-native';

class Screen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name,last_name,data} = this.props.navigation.state.params
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{`${name} ${last_name}`}</Text>
                    <Text>{`${data.job}`}</Text>
                </View>
            );
    }
}
export default Screen;