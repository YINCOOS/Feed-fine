import React, {useRef, useContext} from 'react';
import styled from 'styled-components/native';
// import { Text } from '../../../components/typography/text.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(RNCamera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({navigation}) => {
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const photo = await cameraRef.current.takePictureAsync(options);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
      // console.log(data.uri);
      console.log(photo);
    }
  };
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={RNCamera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
