import * as React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ReactNativeZoomableView</Text>
      <View style={styles.box}>
        <ReactNativeZoomableView
          maxZoom={30}
          initialZoom={1.5}
          // Give these to the zoomable view so it can apply the boundaries around the actual content.
          // Need to make sure the content is actually centered and the width and height are
          // measured when it's rendered naturally. Not the intrinsic sizes.
          // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
          // Therefore, we'll feed the zoomable view the 300x100 size.
          contentWidth={300}
          contentHeight={150}
        >
          <Image
            style={styles.img}
            source={{ uri: 'https://via.placeholder.com/400x200.png' }}
          />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: { borderWidth: 5, flexShrink: 1, height: 500, width: 310 },
  img: { width: '100%', height: '100%', resizeMode: 'contain' },
});