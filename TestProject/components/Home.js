import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  const [input, updateInput] = React.useState('');

  const inputChange = (textVal) => {
    updateInput(textVal);
  };

  const imageURL = {
    uri:
      'https://image.freepik.com/free-vector/elegant-white-texture-background_23-2148431731.jpg',
  };

  return (
    <ImageBackground source={imageURL} style={styles.image}>
      <View style={styles.homeContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            onChangeText={inputChange}
            value={input}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                if (input.length < 3) {
                  Alert.alert(
                    'Warning',
                    'Please enter in a more descriptive search (minimum 3 characters)',
                  );
                } else {
                  navigation.navigate('Results', {
                    searchInput: input,
                  });
                }
              }}>
              Find It!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: 'red',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10,
    width: 300,
    borderColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#691c3a',
    borderRadius: 10,
    width: 150,
    padding: 10,
    margin: 15,
  },
});

export default Home;
