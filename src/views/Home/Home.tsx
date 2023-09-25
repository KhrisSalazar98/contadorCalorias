import React, { useCallback, useState } from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Button, Icon } from '@rneui/themed';

import Header from '../../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Meal, RootStackParamList } from '../../types';
import useFoodStorage from '../../hooks/useFoodStorage';

const Home = () => {

    const [todayFood, setTodayFood] = useState<Meal[]>([]);
    const {onGetTodayFood} = useFoodStorage();
    const {navigate} = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

    const loadTodayFood = useCallback(async () => {
        
        try {

            const todayFoodResponse = await onGetTodayFood();
            console.log(todayFoodResponse);
            setTodayFood(todayFoodResponse);
        
        } catch (error) {

            setTodayFood([]);
            console.error(error);
        }

    },[]);

    useFocusEffect(useCallback(() => {
        loadTodayFood().catch(null);
    }, [loadTodayFood]));

    const handleAddCaloriesPress = () => {
        navigate('AddFood');
    };

    console.log(todayFood);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.caloriesContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.caloriesLegend}>Calories</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Button 
                        icon={<Icon name='add-circle-outline' color='#fff' />}
                        radius='lg'
                        color='#4ecb71'
                        onPress={handleAddCaloriesPress}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#fff',
        flex: 1
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    caloriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24
    },
    caloriesLegend: {
        fontSize: 20
    }
});

export default Home;