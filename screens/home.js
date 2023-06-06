import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Post from './postDetails';

const Home = ({ navigation }) => {
  const image = require('../assets/Images/fasiledes.jpg');

  const recentImage = require('../assets/Images/ayiteyef.jpg');

  const [gallery, setgallery] = useState([
    {
      image: require('../assets/Images/lalibela.jpeg'),
      title: 'Lalibela',
      key: '1',
    },
    {
      image: require('../assets/Images/axum.jpg'),
      title: 'Axum',
      key: '2',
    },
    {
      image: require('../assets/Images/fasiledes.jpg'),
      title: 'Fasiledes',
      key: '3',
    },
    {
      image: require('../assets/Images/ayiteyef.jpg'),
      title: 'Ayiteyef',
      key: '4',
    },
  ]);

  const goToPost = () => {
    navigation.navigate('Post');
  };

  return (
    <View style={{ flexGrow: 1, height: '100%' }}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: '100%', height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hi Nahom</Text>
            <Text style={styles.UserText}>
              Where would you like to go today?
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <TextInput
              style={styles.searchBox}
              placeholder="search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: 'absolute', top: 25, right: 60, opacity: 0.6 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: 'absolute', top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: 'absolute', top: 40, right: 30 }}
          />
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 4,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.ImageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Recently Viewed
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', color: '#ff6200' }}
            >
              View All
            </Text>
          </View>

          <Image
            source={recentImage}
            style={{
              width: '92%',
              height: 250,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{ position: 'absolute ', bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: 'row' }}>
              <Feather
                name="map-pin"
                color="white"
                size={22}
                style={{
                  marginLeft: 10,
                  marginHorizontal: 10,
                  position: 'relative',
                  top: 4,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: 'normal',
                  marginBottom: 10,
                }}
              >
                Ayiteyef
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 'normal',
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Ayiteyef Palace is a Premise, located at: Dessie, Ethiopia. State:
              Amhara Zone: Debub Wollo District: Dessie.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  DarkOverlay: {
    pasition: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    hight: 270,
    backgroundColor: 'red',
    opacity: 0.6,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  UserText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    width: '90%',
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  imageLocationIcon: {
    position: 'absolute',
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});
