import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import { Button, Icon } from '@rneui/themed';

const AddFood = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.addFoodContainer}>

                <View style={styles.legendContainer}>
                    <Text>
                        Add Food
                    </Text>
                </View>
                <View style={styles.addFoodBtnContainer}>
                    <Text>
                        <Button 
                            icon={<Icon name='add-circle-outline' color='#fff' />} 
                            radius='lg'
                            color='#4ecb71'
                        />
                    </Text>
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
    addFoodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    legendContainer: {
        flex: 1
    },
    addFoodBtnContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

export default AddFood;