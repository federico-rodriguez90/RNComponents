import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useFade } from '../hooks/useFade';

const Animation101 = () => {
  const { fadeIn, fadeOut, startMovingPosition, opacity, position } = useFade();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-200);
        }}
      />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
};

export default Animation101;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
