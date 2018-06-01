import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Switch,
	StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Loginscreen from "./component/screens/loginsreen"
import Tictactoe from './component/screens/tictactoe'
import Splash from "./component/screens/splash"
import Signupwith from "./component/screens/signupwith"
export default class Takeinput extends React.Component {
	constructor(props) {
	  super(props);
	
	  }
	render(){
		return(<Signupwith/>)
	}
}