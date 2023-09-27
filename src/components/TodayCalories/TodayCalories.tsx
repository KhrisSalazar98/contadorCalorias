import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';

const TodayCalories = () => {

    return (
        <View style={styles.container}>
            <View>
                <CircularProgress 
                    value={15}
                    valueSuffix={'%'}
                />
            </View>
            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    }
});

export default TodayCalories;
