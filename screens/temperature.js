import * as React from 'react';
import { Text, View ,TextInput,Image,StyleSheet,Button,ScrollView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 

 export default class Temperature extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      d1:"",
      d2:"",
      d3:"",
      d4:"",
      d5:"",
      d6:""
    }
   }
   render(){
  

     return(
       <ScrollView>
       <View style={styles.backgroundcolor} color="#311199">
      
        
           <Image
          source={require("../assets/thermometer_10.png")}
          style={styles.titleImage}
        ></Image>
        <Text> Day 1 (Fahrenheit) - </Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d1}
       onChangeText={(text)=>{
          this.setState({
            d1:text
          })
        }}
      />
      
      <Text> Day 2 (Fahrenheit) - </Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d2}
        onChangeText={(text)=>{
          this.setState({
            d2:text
          })
        }}
      />

      <Text> Day 3 (Fahrenheit) - </Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d3}
       onChangeText={(text)=>{
          this.setState({
            d3:text
          })
        }}
      />

      <Text> Day 4 (Fahrenheit) - </Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d4}
        onChangeText={(text)=>{
          this.setState({
            d4:text
          })
        }}
      />
   

      <Text> Day 5 (Fahrenheit) -</Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d5}
        onChangeText={(text)=>{
          this.setState({
            d5:text
          })
        }}
      />

      <Text> Day 6 (Fahrenheit) -</Text>
        <TextInput
        placeholder="Temperature"
        value={this.state.d6}
        onChangeText={(text)=>{
          this.setState({
            d6:text
          })
          
        }}
        
      />
        <View style={styles.submitButton}>
                <Button 
                  
                  title="Submit"
                  color="#311199"
                />
</View>
          <View style={styles.week}>
                <Button
                  onPress={() => this.props.navigation.navigate("Week")}
                  title="1W"
                  color="gray"
                 
                />

                <Button 
                  onPress={() => this.addStory()}
                  title="2W"
                  color="gray"
                />
                <Button 
                  onPress={() => this.addStory()}
                  title="3W"
                  color="gray"
                />
                <Button 
                  onPress={() => this.addStory()}
                  title="4W"
                  color="gray"
                />
                

              
              </View>
          
           </View>



           </ScrollView>

     )
   }
  
 }

   const styles = StyleSheet.create({
       titleImage: {
       width:100,
       height:100,
       resizeMode:"center",
       marginLeft:"35%"
        
  },

       submitButton:{
       width:100,
       marginLeft:117
  },
      backgroundcolor:{
        backgroundColor:"#93774030"
  },
      week:{
        height:220,
        width:100,
      }

     })


