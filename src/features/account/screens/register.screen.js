import React, {useState, useContext} from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import LottieView from 'lottie-react-native';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {
  AccountBackground,
  AccountCountainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styles';

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const {onRegister, isLoading, error} = useContext(AuthenticationContext);
  //   console.log(error);
  return (
    <AccountBackground>
      <AccountCover />
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require('../../../../assets/watermelon.json')}
      />
      <Title>Food Is Ready</Title>
      <AccountCountainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="eailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={p => setRepeatedPassword(p)}
          />
        </Spacer>
        <ErrorContainer>
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
        </ErrorContainer>

        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}>
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </Spacer>
      </AccountCountainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
