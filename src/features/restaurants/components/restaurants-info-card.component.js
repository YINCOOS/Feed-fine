import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name="Some Restaurant",
        icon,
        photos=[
           "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg"
        ],
        address= "100 some random street",
        isOpenNow= true,
        rating = 4,
        isClosedTemporarily= true,
    } = restaurant
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
            <Title>{name}</Title>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: {padding: 16}
});