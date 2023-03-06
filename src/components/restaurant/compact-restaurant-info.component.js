import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { Platform } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
border-radius: 10px;
width: 120px;
height: 100px;
`;

const CompactWebView = styled(WebView)`
border-radius: 10px;
width: 120px;
height: 100px;
marginTop: 10px;`;


const Item = styled.View`
padding: 10px;
max-width: 120px;
align-items: center;
`;


const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({restaurant, isMap}) => {
    const Image = isAndroid && isMap ? CompactWebView : CompactImage;
    return (
        <TouchableOpacity>
            <Item>
            <Image source={{uri: restaurant.photos[0]}} originWhitelist={['*']}/>
                <Text center variant="caption" numberOfLines={3}>
                    {restaurant.name}, {restaurant.address}
                </Text>
            </Item>
        </TouchableOpacity>
    )
};