import React, {Component} from 'react'
import {View, Text} from 'react-native'

class AuthScreen extends Component{
    loginHandler = () => {

    }

    render(){
        return(

            <View>
                <Text>AuthScreen</Text>
                <Button title= "Login" onPress={this.loginHandler}/>
            </View>
        )
    }
}

export default AuthScreen
