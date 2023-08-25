import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import {ThumbsButtons, BackButton} from '../CustomButtons/CustomButton';

const MovieCard = props => {
  return  (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={require('../../images/interestellar.jpg')} 
        />
        <View style={styles.backBox}>
          <BackButton />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Interestellar</Text>
        <Text style={styles.text}>Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ThumbsButtons />
      </View>
    </View>
  )
}

export default MovieCard;