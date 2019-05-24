import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceImage from './src/assets/beutiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

class App extends Component{

  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  render() {
    
    return (
      
      <View style={styles.container}>
        <PlaceDetail 
            selectedPlace={this.props.selectedPlace} 
            onItemDeleted={this.placeDeletedHandler} 
            onModalClosed={this.modalClosedHandler} 
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }

});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deletePlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);