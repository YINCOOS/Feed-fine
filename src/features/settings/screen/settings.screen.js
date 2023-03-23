// import React, {useContext, useState} from 'react';
// import {useFocusEffect} from '@react-navigation/native';
// import styled from 'styled-components/native';
// import {TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Text} from '../../../components/typography/text.component';
// import {Spacer} from '../../../components/spacer/spacer.component';
// import {AuthenticationContext} from '../../../services/authentication/authentication.context';
// import {List, Avatar} from 'react-native-paper';
// import {SafeArea} from '../../../components/utility/safe-area.component';

// const SettingsBackground = styled.ImageBackground.attrs({
//   source: require('../../../../assets/home_bg.jpeg'),
// })`
// position: absolute;
// height: 100%;
// width: 100%;`

// const SettingsItem = styled(List.Item)`
//   padding: 16px;
// `;

// const AvatarContainer = styled.View`
//   align-items: center;
// `;

// export const SettingsScreen = ({navigation}) => {
//   const {onLogout, user} = useContext(AuthenticationContext);
//   const [photo, setPhoto] = useState(null);

//   const getProfilePicture = async currentUser => {
//     const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
//     setPhoto(photoUri);
//     console.log(photo);
//   };
//   useFocusEffect(() => {
//     getProfilePicture(user);
//   }, [user]);
//   return (
//     <SettingsBackground>
//     <SafeArea>
//       <AvatarContainer>
//         <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
//           {!photo && (
//             <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
//           )}
//           {photo && <Avatar.Image size={180} source={{uri: photo}} />}
//         </TouchableOpacity>
//         <Spacer position="top" size="large">
//           <Text variant="caption">{user.email}</Text>
//         </Spacer>
//       </AvatarContainer>
//       <List.Section>
//         <SettingsItem
//           title="Favourites"
//           description="View your favourites"
//           left={props => <List.Icon {...props} color="black" icon="heart" />}
//           onPress={() => navigation.navigate('Favourites')}
//         />
//         <SettingsItem
//           title="Logout"
//           left={props => <List.Icon {...props} color="black" icon="door" />}
//           onPress={onLogout}
//         />
//          <SettingsItem
//           title="Previous Order"
//           left={props => <List.Icon {...props} color="black" icon="door" />}
//           onPress={onLogout}
//         />
//       </List.Section>
//     </SafeArea>
//     </SettingsBackground>
//   );
// };

import React, {useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {List, Avatar} from 'react-native-paper';
import {SafeArea} from '../../../components/utility/safe-area.component';

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpeg'),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async currentUser => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
    console.log(photo);
  };
  // useFocusEffect(() => {
  //   getProfilePicture(user);
  // }, [user]);
  const callback = React.useCallback(() => {
    getProfilePicture(user);
  }, [user, getProfilePicture]);
  useFocusEffect(callback);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            {!photo && (
              <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            )}
            {photo && <Avatar.Image size={180} source={{uri: photo}} />}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="caption">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={props => <List.Icon {...props} color="red" icon="heart" />}
            onPress={() => navigation.navigate('Favourites')}
          />
          <Spacer />
          <SettingsItem
            title="Payment"
            left={props => <List.Icon {...props} color="black" icon="cart" />}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={props => (
              <List.Icon {...props} color="black" icon="history" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={props => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
