import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import MovieCard from '../../Components/MovieCard/MovieCard';
import {WeeklyBox} from '../../Components/WeeklyBox/WeeklyBox';
import DailyQuiz from '../../Components/DailyQuiz/DailyQuiz';
import DailyBox from '../../Components/DailyBox/DailyBox';

const MainPageComponent = props => {
  const {} = props;

  return(
    <View style={styles.backgroundColor}>
      <View style={styles.thumbsContainer}>
        <MovieCard />
      </View>
      <View style={styles.movieBoxContainer}>
        <WeeklyBox />
        <DailyQuiz />
        <DailyBox />
      </View>

    </View>
  )
}

export default MainPageComponent;