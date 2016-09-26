import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

import axios from 'axios';

import ModalPicker from 'react-native-modal-picker';

import initialStyles from '../styles/initialStyles';
const styles = StyleSheet.create(initialStyles);

class Initial extends Component {

  componentWillMount() {
    this.props.loadUsers();
    this.props.loadEvents();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.form}>
          <Text style={styles.coloredText}>
            USER:
          </Text>
          <ModalPicker
            style={styles.modalStyle}
            selectStyle={styles.selectStyle}
            data={this.props.users}
            initValue="SELECT USER"
            onChange={(option)=>{ this.setState({textInputValue:option.label})}}
            />
          <Text style={styles.coloredText}>
            EVENT:
          </Text>
          <ModalPicker
            style={styles.modalStyle}
            selectStyle={styles.selectStyle}
            data={this.props.events}
            initValue="SELECT EVENT"
            onChange={(option)=>{ this.setState({textInputValue:option.label})}}
            />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            underlayColor='gray'
            style={styles.buttons}
            onPress={() => console.log('hi')}>
            <Text style={styles.buttonText}>
              START SURVEY
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='gray'
            style={styles.buttons}
            onPress={() => console.log('hi')}>
            <Text style={styles.buttonText}>
              CONNECT
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='gray'
            style={styles.buttons}
            onPress={() => console.log('hi')}>
            <Text style={styles.buttonText}>
              SHOWS SCHEDULE
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.leads}>
          <Text>
            0 leads to upload
          </Text>
        </View>

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.initialReducer.users,
    events: state.initialReducer.events
  }
}

export default connect(mapStateToProps, actions)(Initial);
