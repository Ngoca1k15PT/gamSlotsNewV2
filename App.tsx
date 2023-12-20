import React from 'react';
import { StyleSheet, View, Text , Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  interpolate
} from 'react-native-reanimated';

export default function App() {
  const defaultAnim = useSharedValue(50);
  const defaultAnim1 = useSharedValue(50);
  const duration = 100;

  const animatedDefault = useAnimatedStyle(() => ({
    opacity: interpolate(defaultAnim.value, [-100, 100], [1, 0.5, 0]),
    transform: [{ translateY: defaultAnim.value }],
  }));
  const animatedDefault1 = useAnimatedStyle(() => ({
    opacity: interpolate(defaultAnim1.value, [-100, 100], [1, 0.5, 0]),
    transform: [{ translateY: defaultAnim1.value }],
  }));


  // React.useEffect(() => {
  //   defaultAnim.value = withRepeat(
  //     withTiming(-defaultAnim.value, {
  //       duration: 150,
  //         easing: Easing.inOut(Easing.quad)
  //     }),
  //     -1,
  //     // true
  //   );
  //   defaultAnim1.value = withRepeat(
  //     withTiming(-defaultAnim1.value, {
  //       duration: 160,
  //       easing: Easing.inOut(Easing.quad)
  //     }),
  //     -1,
  //     // true
  //   );
  // }, []);

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[styles.box, animatedDefault]}>
          <Image 
            source={{uri: 'https://img.freepik.com/free-photo/cartoon-character-with-fashion-bag_71767-98.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=sph'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
          </Animated.View>
        <Animated.View style={[styles.box, animatedDefault]}>
        <Image 
            source={{uri: 'https://img.freepik.com/premium-photo/cartoon-character-with-blue-hair-purple-headband-stands-front-blue-background_784625-9667.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View><Animated.View style={[styles.box, animatedDefault]}>
        <Image 
            source={{uri: 'https://img.freepik.com/premium-photo/cartoon-character-with-blue-jacket-glasses-stands-front-cityscape_784625-9564.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View>
      </View>
      <View>
        <Animated.View style={[styles.box, animatedDefault1]}>
          <Image 
            source={{uri: 'https://img.freepik.com/fotos-premium/3d-kawaii-design-charakter-entzueckende-und-niedliche-illustration_784625-1449.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
          </Animated.View>
        <Animated.View style={[styles.box, animatedDefault1]}>
        <Image 
            source={{uri: 'https://img.freepik.com/photos-premium/mignon-adorable-dessin-anime-bebe-fantaisie-onirique-surrealiste_772785-4036.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View><Animated.View style={[styles.box, animatedDefault1]}>
        <Image 
            source={{uri: 'https://img.freepik.com/photos-premium/mignon-adorable-dessin-anime-bebe-fantaisie-onirique-surrealiste_772785-4027.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View>
      </View>
      <View>
        <Animated.View style={[styles.box, animatedDefault]}>
          <Image 
            source={{uri: 'https://img.freepik.com/premium-photo/cartoon-character-with-city-background_784625-10866.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
          </Animated.View>
        <Animated.View style={[styles.box, animatedDefault]}>
        <Image 
            source={{uri: 'https://img.freepik.com/photos-premium/mignon-adorable-dessin-anime-bebe-fantaisie-onirique-surrealiste_772785-4036.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View><Animated.View style={[styles.box, animatedDefault]}>
        <Image 
            source={{uri: 'https://img.freepik.com/photos-premium/mignon-adorable-dessin-anime-bebe-fantaisie-onirique-surrealiste_772785-4027.jpg'}}  
            style={{width: '100%', height: '100%', overflow: 'hidden'}}
          />
        </Animated.View>
      </View>
      {/* <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    height: 450,
    marginTop: 150,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});