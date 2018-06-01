import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Switch,
	StyleSheet
} from 'react-native';

export default class Tictactoe extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
		a1:'',
		a2:'',
		a3:'',
		a4:'',
		a5:'',
		a6:'',
		a7:'',
		a8:'',
		a9:'',
		user:"Player one's turn" ,
	  };
	}
	onTouchInputa1=()=>{
		if(!this.state.a1){
			this.setState({
			a1:'X',
			user:"Player two's turn"
			});
			if(this.checkwinner()){
				this.checkwinner();
			}
		}
		else{
			alert('Already filled select anyother field')
		}
	}
	onTouchInputa2=()=>{
		if(!this.state.a2){
			this.setState({
				a2:'X',
				user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}
		}
		else{
			alert('Already filled select anyother field')
		}
}	
	onTouchInputa3=()=>{	
		if(!this.state.a3){
		this.setState({
		a3:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa4=()=>{	
		if(!this.state.a4){
		this.setState({
		a4:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa5=()=>{	
		if(!this.state.a5){	
		this.setState({
		a5:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa6=()=>{	
		if(!this.state.a6){
		this.setState({
		a6:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa7=()=>{	
		if(!this.state.a7){
		this.setState({
		a7:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa8=()=>{	
		if(!this.state.a8){
		this.setState({
		a8:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}
	onTouchInputa9=()=>{	
		if(!this.state.a9){
		this.setState({
		a9:'X',
		user:"Player two's turn"
		});
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}





onTouchInputO1=()=>{
	if(!this.state.a1){
		this.setState({
		a1:'O',
		user:"Player one's turn"
		});this.checkwinner();
		if(this.checkwinner()){
			this.checkwinner();
		}}
	else{
		alert('Already filled select anyother field')
	}
}
onTouchInputO2=()=>{
	
	if(!this.state.a2){
		this.setState({
			a2:'O',
			user:"Player one's turn"
	});
	if(this.checkwinner()){
		this.checkwinner();
	}}
	else{
		alert('Already filled select anyother field')
	}
}	
onTouchInputO3=()=>{	
	if(!this.state.a3){
	this.setState({
	a3:'O',
	user:"Player one's turn"
	});
	if(this.checkwinner()){
		this.checkwinner();
	}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO4=()=>{	
	if(!this.state.a4){
	this.setState({
	a4:'O',
	user:"Player one's turn"
	});
	if(this.checkwinner()){
		this.checkwinner();
	}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO5=()=>{	
	if(!this.state.a5){	
	this.setState({
	a5:'O',
	user:"Player one's turn"
	});
	if(this.checkwinner()){
		this.checkwinner();
	}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO6=()=>{	
	if(!this.state.a6){
	this.setState({
	a6:'O',
	user:"Player one's turn"
	});
	
	if(this.checkwinner()){
		this.checkwinner();
	}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO7=()=>{	
	if(!this.state.a7){
	this.setState({
	a7:'O',
	user:"Player one's turn"
	});
	if(this.checkwinner()){
		this.checkwinner();
	}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO8=()=>{	
	if(!this.state.a8){
	this.setState({
	a8:'O',
	user:"Player one's turn"	
});
if(this.checkwinner()){
	this.checkwinner();
}}
else{
	alert('Already filled select anyother field')
}
}
onTouchInputO9=()=>{	
	if(!this.state.a9){
	this.setState({
	a9:'O',
	user:"Player one's turn"	
});
alert(this.state.a9);
if(this.checkwinner()){
	this.checkwinner();
}
}
else{
	alert('Already filled select anyother field')
}
}

turn1=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa1();
		alert(this.state);
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
	else{
		if(this.checkwinner()){
			this.checkwinner();
		}
		this.onTouchInputO1();
		alert(this.state);
	}
}

turn2=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa2();
		alert((this.state.a2).toString());
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO2();
		alert((this.state.a2).toString());
		if(this.checkwinner()){
			this.checkwinner();
		}
	}

}
turn3=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa3();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO3();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}
turn4=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa4();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
	else{
		this.onTouchInputO4();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}

turn5=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa5();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO5();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}
turn6=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa6();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO6();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}
turn7=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa7();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO7();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}
turn8=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa8();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO8();
		if(this.checkwinner()){
			this.checkwinner();
		}
	}
}
turn9=()=>{
	if(this.state.user==="Player one's turn"){
		this.onTouchInputa9();
		if(this.checkwinner()){
			this.checkwinner();
		}		
	}
	else{
		this.onTouchInputO9();
		if(this.checkwinner()){
			this.checkwinner();
		}	
		}
}

checkwinner=()=>{
	if((this.state.a1==='X'&&this.state.a2==='X'&&this.state.a3==='X') || (this.state.a1==='X'&&this.state.a4==='X'&&this.state.a7==='X')||(this.state.a1==='X'&&this.state.a5==='X'&&this.state.a9==='X')||(this.state.a2==='X'&&this.state.a5==='X'&&this.state.a8==='X')||(this.state.a3==='X'&&this.state.a6==='X'&&this.state.a9==='X')||(this.state.a4==='X'&&this.state.a5==='X'&&this.state.a6==='X') ||(this.state.a7==='X'&&this.state.a8==='X'&&this.state.a9==='X')||(this.state.a3==='X'&&this.state.a5==='X'&&this.state.a7==='X')){
		this.state.winner='Player 1 Win'
		this.newgame();
		return true;
	}
	else if((this.state.a1==='O'&&this.state.a2==='O'&&this.state.a3==='O') || (this.state.a1==='O'&&this.state.a4==='O'&&this.state.a7==='O')||(this.state.a1==='O'&&this.state.a5==='O'&&this.state.a9==='O')||(this.state.a2==='O'&&this.state.a5==='O'&&this.state.a8==='O')||(this.state.a3==='O'&&this.state.a6==='O'&&this.state.a9==='O')||(this.state.a4==='O'&&this.state.a5==='O'&&this.state.a6==='O') ||(this.state.a7==='X'&&this.state.a8==='O'&&this.state.a9==='O')||(this.state.a3==='O'&&this.state.a5==='O'&&this.state.a7==='O')){
		this.state.winner='Player 2 Win'
		this.newgame();
		return true;
	}
 }




newgame=()=>{
	this.setState({
		a1:'',
		a2:'',
		a3:'',
		a4:'',
		a5:'',
		a6:'',
		a7:'',
		a8:'',
		a9:'',
		user:"Player one's turn"
	});
}


	render(){
        
		return(
			<View style={styles.container}>
				<View style={styles.row}>
					<TouchableOpacity 
					style={styles.square} 
					onPress={this.turn1}>
						<Text style={styles.label}>{this.state.a1}</Text>
					</TouchableOpacity >
					<TouchableOpacity 
					style={styles.square} 
					onPress={this.turn2}>
						<Text style={styles.label}>{this.state.a2}</Text>
					</TouchableOpacity>
					<TouchableOpacity 
					style={styles.square} 
					onPress={this.turn3}>
						<Text style={styles.label}>{this.state.a3}</Text>
					</TouchableOpacity>
				</View>	
				<View style={styles.row}>
					<TouchableOpacity 
					style={styles.square}
					onPress={this.turn4}
					>
						<Text style={styles.label}>{this.state.a4}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}
					onPress={this.turn5}>
						<Text style={styles.label}>{this.state.a5}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}
					onPress={this.turn6}>
						<Text style={styles.label}>{this.state.a6}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.square}
					onPress={this.turn7}>
						<Text style={styles.label}>{this.state.a7}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}
					onPress={this.turn8}>
						<Text style={styles.label}>{this.state.a8}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.square}
					onPress={this.turn9}>
						<Text style={styles.label}>{this.state.a9}</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.winner}>{this.state.user}</Text>
				<TouchableOpacity onPress={this.newgame} style={{height:50,width:350,backgroundColor:'powderblue',alignItems:'center',justifyContent:'center'}}>
				<Text style={styles.label}>New Game</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles=StyleSheet.create({
        container:{
            flex:1,
			backgroundColor:'rgb(255,87,51)',
			flexDirection:'column',
			alignItems:'center',
			justifyContent:'center'
			
		},
		row:{
			flexDirection: 'row',
			
		},
		square:{
			height:100,
			width:100,
			backgroundColor:'powderblue',
			margin:10,
			alignItems:'center',
			justifyContent:'center'
			
		},
		label:{
			fontSize:22,
			fontWeight:'bold'
		},
		winner:{
			fontSize:22,
			fontWeight:'bold'
		}
	});
