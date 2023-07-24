import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MovieCard from '../../Components/MovieCard/MovieCard';
import { WeeklyBox } from '../../Components/WeeklyBox/MovieBoxes';
import DailyQuiz from '../../Components/DailyQuiz/DailyQuiz';
import DailyBox from '../../Components/DailyBox/DailyBox';
import SplashScreen from 'react-native-splash-screen';

const MainPageComponent = props => {
  const {} = props;

  return (
    <View style={styles.backgroundColor}>
      {/*<View style={styles.thumbsContainer}>
        <MovieCard>
        </MovieCard>
      </View>*/}
      <View style={styles.movieBoxContainer}>
        <WeeklyBox />
        <DailyQuiz />
        <DailyBox />
      </View>
    </View>
  )
}

export default MainPageComponent;