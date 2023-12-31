import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import MealItem from "../MealItem";
import { Meal } from "../../types";

type TodayMealsProps = {
    foods: Meal[];
    onCompleteAddRemove: () => void;
}

const TodayMeals: FC<TodayMealsProps> = ({ foods, onCompleteAddRemove }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today Meals</Text>
            <ScrollView style={styles.content}>
                {foods?.map((meal: Meal, i) => (
                    <MealItem
                        key={`today-meal-item-${i}`}
                        {...meal}
                        onCompleteAddRemove={onCompleteAddRemove}
                        itemPosition={i}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    },
    content: {
        marginVertical: 16
    },
    title: {
        fontSize: 16
    }
});

export default TodayMeals;