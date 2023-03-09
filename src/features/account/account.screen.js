import React from 'react';
import { Spacer } from '../../components/spacer/spacer.component';
import {AccountBackground, AccountCountainer, AccountCover, AuthButton} from './components/account.styles';


export const AccountScreen = ({navigation}) => {
  return(
    <AccountBackground>
        <AccountCover>
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
                        icon="lock-open-outline"
                        color="black"
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
