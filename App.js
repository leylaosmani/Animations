import React, { useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Text,
  Button,

  TouchableOpacity,
} from 'react-native';
function Box(props) {
  return (
    <Animated.View
      style={[
        styles.circle,
        {
          top: props.Top,
          backgroundColor: props.Color,
          left: props.Left,
          width: 100,
          height: 100,
          opacity: props.Opacity,
        },
      ]}></Animated.View>
  );
}

export default () => {
  const value = useRef(new Animated.Value(0)).current;

  const Fade = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 3000,
    }).start();
  };
  const RedYellow = () => {
    Animated.timing(value, {
      toValue: 150,
      duration: 3000,
    }).start();
  };
  const Spring = () => {
    Animated.spring(value, { toValue: 100, duration: 7000 }).start();
  };


  return (
    <View style={styles.container}>
      <Box
        Top={value}
        Color={value.interpolate({
          inputRange: [0, 100],
          outputRange: ['red', 'yellow'],
        })}
        Left={95}
        Opacity={value}
      />

      <View style={styles.buttons}>

        <TouchableOpacity style={styles.button} onPress={RedYellow}>
          <Text style={styles.buttonText}>Red-Yellow</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Spring}>
          <Text style={styles.buttonText}>SPRING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Fade}>
          <Text style={styles.buttonText}>FADE</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#ffe6ff',
    borderRadius: 60,
    padding: 50,
    marginTop: 100,
  },
  buttons: {
    marginTop: 300,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    width: '500%',
    height: 60,
    margin: 25,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,

  },
});