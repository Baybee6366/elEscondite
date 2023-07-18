import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./style";

const ThumbsButtons = props => {
    const {onPressUp, type} = props;
    const {onPressDown, downType} = props;
return(
    <View style={styles.container}>
        <Pressable onPress={onPressUp}>
            <Text style={styles.greenButton}>
                {/*insertar imagen, Reemplazar Text*/} Arriba
            </Text>
        </Pressable>
        <Pressable onPress={onPressDown}>
            <Text style={styles.redButton}>
                {/*Insertar imagen, Reemplazar Text*/} Abajo
            </Text>
        </Pressable>
    </View>
)
};

export default ThumbsButtons;

