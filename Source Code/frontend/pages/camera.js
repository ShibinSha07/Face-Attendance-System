import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { createNativeStackNavigator,useNavigation } from '@react-navigation/native';


class CameraScreen extends React.Component {
  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={{ flex: 0, alignSelf: 'center', margin: 20 }}
        >
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </RNCamera>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

export default CameraScreen;
