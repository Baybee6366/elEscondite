import React from "react";
import {Text, View} from "react-native";
import styles from "./style";
import ThumbsButtons from "../CustomButtons/CustomButton";

const MovieCard = props => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.backBox}>
                    <Text>
                       {/*Insercar icono regresar*/} Ola
                    </Text>
                </View>
                <Text>
                    {/*Insertar Imagen de fondo, Texto por encima*/} Ola
                </Text>
            </View>
            <View style={styles.textContainer}>

            </View>
            <View style={styles.buttonContainer}>
                <ThumbsButtons />
            </View>
        </View>
    )
}

export default MovieCard;