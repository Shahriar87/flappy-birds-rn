import React from 'react';
import { StyleSheet, Text, View, Dimension } from 'react-native';
import Bird from './components/Bird';

export default function App() {
    const screenWidth = Dimension.get('screen').width;
    const screenHeight = Dimension.get('screen').height;

    return (
        <View style={styles.container}>
            <Bird />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
