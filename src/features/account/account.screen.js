import React from 'react';
import { Spacer } from '../../components/spacer/spacer.component';
import {AccountBackground, AccountCountainer, AccountCover, AuthButton, Title} from './components/account.styles';


export const AccountScreen = ({navigation}) => {
  return(
    <AccountBackground>
        <AccountCover>
            <Title>Food Is Ready</Title>
            <AccountCountainer>
                <AuthButton
                    icon="lock-open-outline"
                    color="black"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}>
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() =>navigation.navigate("Register")}>
                        Register
                    </AuthButton>
                </Spacer>
            </AccountCountainer>
        </AccountCover>
    </AccountBackground>
  )
};
