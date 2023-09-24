import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import { Button, Icon, Input } from '@rneui/themed';
import AddFoodModal from '../../components/AddFoodModal';
import { Alert } from 'react-native';
import useFoodStorage from '../../hooks/useFoodStorage';
import { Meal } from '../../types';

const AddFood = () => {

    const [visible, setVisible] = useState(false);
    const [foods, setFoods] = useState<Meal[]>([]);
    const {onGetFoods} = useFoodStorage();
    
    const loadFoods = async () => {
        try {
            const foodsResponse = await onGetFoods();
            setFoods(foodsResponse);
        } catch (error) {
            console.error(error);
        }
    }

    const handleModalClose = async (shouldUpdate?: boolean) => {
        
        if(shouldUpdate) {
            Alert.alert('Comida guardada exitosamente');  
            loadFoods();
        }

        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.addFoodContainer}>

                <View style={styles.legendContainer}>
                    <Text style={styles.addFoodLegend}>
                        Add Food
                    </Text>
                </View>
                <View style={styles.addFoodBtnContainer}>
                    <Text>
                        <Button 
                            icon={<Icon name='add-circle-outline' color='#fff' />} 
                            radius='lg'
                            color='#4ecb71'
                            onPress={() => setVisible(true)}
                        />
                    </Text>
                </View>

            </View>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder='apples, pie, soda...' />
                </View>
                <View style={styles.searchBtn}>
                    <Button 
                        title='Search'
                        color='#ade8af'
                        titleStyle={styles.searchBtnTitle} 
                        radius='lg'
                    />
                </View>
            </View>
            <AddFoodModal visible={visible} onClose={handleModalClose} />
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
    },
    addFoodLegend: {
        fontSize: 20
    },
    searchContainer: {
        flexDirection: 'row',

    },
    inputContainer: {
        flex: 1,
        marginLeft: -12
    },
    searchBtn: {
        
    },
    searchBtnTitle: {
        color: '#000',
        fontSize: 14
    }
});

export default AddFood;