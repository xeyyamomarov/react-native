import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from '../style';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AboutScreen = () => {
  const {cameraRef} = useRef(null);


  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data);
    }
  };

  

  const handleCapture = async () => {
    try {
      const data = await takePicture();
      console.log(data,"dataaa")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        flashMode={RNCamera.Constants.FlashMode.off}
      />

      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.openBtn} onPress={handleCapture}>
          <Text style={styles.openBtnText}>
            Open camera
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutScreen;
