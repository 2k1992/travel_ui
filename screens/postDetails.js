import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Post = ({ navigation }) => {
  const image = require('../assets/Images/lalibela.jpeg');

  return (
    <View>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
      >
        <Text style={styles.Tagline}>Discover Lalibela</Text>
        <Text style={styles.Placename}>
          Explore the beauty of Lalibela churches
        </Text>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 20,
            top: 40,
            backgroundColor: 'violet',
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            top: 40,
            backgroundColor: 'violet',
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 380,
    justifyContent: 'flex-end',
  },
  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  Placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
});
