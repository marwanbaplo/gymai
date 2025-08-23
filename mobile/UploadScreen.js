import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
  const [images, setImages] = useState([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  return (
    <View>
      <Button title="Pick Images" onPress={pickImages} />
      {images.map((img, i) => (
        <Image key={i} source={{ uri: img.uri }} style={{ width: 100, height: 100 }} />
      ))}
    </View>
  );
}
