import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Navigator,
  View,
  Text,
  Image
} from 'react-native';
import Initial from './Initial';

import layoutStyles from '../styles/layoutStyles';
const styles = StyleSheet.create(layoutStyles);

const ROUTES = {
  initial: Initial
};

class Layout extends Component {

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component />;
  }

  render() {
    return (
      <View style={[styles.container, styles.topLevel]}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
            />
        </View>
        <Navigator
          style={[styles.container, styles.children]}
          initialRoute={{name: 'initial'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={() => Navigator.SceneConfigs.FloatFromRight}
          />
      </View>
    )
  }
}


export default Layout;
