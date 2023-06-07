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
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const Post = ({ navigation }) => {
  const image = require('../assets/Images/lalibela.jpeg');
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

  const goBack = () => {
    navigation.goBack();
  };

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
          onPress={goBack}
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

      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.BookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}>
          About The Place
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: 'normal',
            opacity: 0.4,
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
          }}
        >
          The Lalibela churches are a group of 11 rock-hewn churches located in
          the Western Ethiopian Highlands near the town of Lalibela. They were
          commissioned by King Gebre Mesqel Lalibela of the Zagwe dynasty in the
          late 12th and early 13th centuries to recreate the holy city of
          Jerusalem in his own kingdom. The churches are monolithic, meaning
          they were carved out of a single block of stone using a subtractive
          process. Four of the churches are free-standing, while seven share a
          wall with the mountain out of which they are carved. The Lalibela
          churches are square or rectangular in form, with basilical or
          cruciform plans. They take their form, placement, and orientation from
          both geological features and structures within the complex. The
          churches are each unique, giving the site an architectural diversity
          that is evident by the human figures of bas-reliefs inside Bet
          Golgotha, and the colorful paintings of geometrical designs and
          biblical scenes in Bet Mariam.
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: 'normal',
            opacity: 0.4,
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
          }}
        >
          The Lalibela churches hold important religious significance for
          Ethiopian Orthodox Christians and form a pilgrimage site with
          particular spiritual significance. The Lalibela complex is now
          considered a representation of the "New Jerusalem," but the
          dedications of the churches and their functions have changed over
          time. The churches were designated a UNESCO World Heritage site in
          1978 and are still preserved in their natural settings. The Lalibela
          churches offer an exceptional testimony to the medieval and
          post-medieval civilization of Ethiopia, including the extensive
          remains of traditional, two-story circular village houses with
          interior staircases and thatched roofs. The original function of the
          site as a pilgrimage place still persists and provides evidence of the
          continuity of social practices. The expert craftsmanship of the
          Lalibela churches has been linked with the earlier church of Debre
          Damo near Aksum and tends to support the assumption of a
          well-developed Ethiopian tradition of architecture.
        </Text>

        <View>
          <Text style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}>
            Suggested Places
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.darkOverlay} />
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 10,
                        bottom: 10,
                      }}
                    />
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 30,
                        bottom: 10,
                        color: 'white',
                        fontSize: '14',
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
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
  BookTicketBtn: {
    position: 'absolute',
    right: 12,
    top: 350,
    backgroundColor: 'violet',
    padding: 16,
    borderRadius: 40,
    zIndex: 2,
  },
  BookTicketText: {
    color: 'white',
    fontSize: 14,
  },
  darkOverlay: {
    width: 150,
    height: 150,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2,
    top: 0,
    left: 10,
    right: 0,
    borderRadius: 10,
  },
});
