import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <View style={styles.leftContainer}>

                </View>
                <View style={styles.rightContainer}>

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

    },
    rightContainer: {
        
    }
});

export default Home;