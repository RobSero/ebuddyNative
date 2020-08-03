import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#691c3a',
    height: 80,
    padding: 10,
    paddingTop: 40,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});

export default Header;
