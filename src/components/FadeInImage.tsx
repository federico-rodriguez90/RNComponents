import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import { useFade } from '../hooks/useFade';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useFade();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          size="large"
          color="#8080ff"
        />
      )}
      <Animated.Image
        style={{ ...(style as any), opacity }}
        source={{ uri }}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

export default FadeInImage;
