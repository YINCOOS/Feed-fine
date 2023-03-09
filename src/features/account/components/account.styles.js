// import React from 'react';
// import {ImageBackground, StyleSheet, Text, View} from 'react-native';
// import styled from 'styled-components/native';

// const image = require('../../../../assets/home_bg.jpeg');

// const StyledImageBackground = styled(ImageBackground)`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledText = styled(Text)`
//   font-size: 24px;
//   font-weight: bold;
//   color: red;
// `;
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//   });

// export const AccountBackground = () => (
//   <View style={styles.container}>
//     <StyledImageBackground source={image} resizeMode="cover">
//       <StyledText>Inside</StyledText>
//     </StyledImageBackground>
//   </View>
// );

import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import { Button } from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpeg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountCountainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
padding: ${(props) =>props.theme.space[4]}
margin-top: ${(props) =>props.theme.space[2]}
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
padding: ${(props) => props.theme.space[2] };`;