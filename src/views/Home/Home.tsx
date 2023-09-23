import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Icon } from '@rneui/themed';

import Header from '../../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const Home = () => {

    const {navigate} = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

    const handleAddCaloriesPress = () => {
        navigate('AddFood');
    };

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