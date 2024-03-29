import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {Button, TextInput} from 'react-native-paper';
import {Text} from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpeg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  align-items: center;
    justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountCountainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
padding: ${props => props.theme.space[4]}
margin-top: ${props => props.theme.space[2]}
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${props => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  align-items: center;
  margin-top: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[2]};
  `;

export const AnimationWrapper = styled.View`
width:100%;
height:40%;
position:absolute;
top: 3px;
`;