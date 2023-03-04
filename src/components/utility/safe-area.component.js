import {StatusBar, SafeAreaView, Platform} from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === 'android' && `margin-top: ${StatusBar.currentHeight}px`}
`;
//  ${Platform.OS === 'android' && `margin-top: ${StatusBar.currentHeight}px`}