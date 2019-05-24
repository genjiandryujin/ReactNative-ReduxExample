import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';


class PlaceInput extends Component {

    state={
        placeName: "",
        places: []
    }

    componentDidMount() {
        
    }
    
    placeNameChangeHandler = val => {
        this.setState({
          placeName: val
        })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === ""){
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
    }

    render() {
        return(
            <View style={styles.inputContainer} >
            <TextInput
              placeholder='An awesome place'
              value={this.state.placename} 
              onChangeText={this.placeNameChangeHandler} 
              style={styles.placeInput}
            />
            <Button 
              title="ADD" 
              style={styles.placeButton} 
              onPress={this.placeSubmitHandler} 
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    placeButton: {
        width: '30%'
      },
    placeInput: {
        width: '70%'
      },
});

export default PlaceInput;