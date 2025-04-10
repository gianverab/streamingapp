import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import VideoControls from 'react-native-video-controls';

// Sample HLS videos from hls.js demo
const HLS_VIDEOS = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: '2',
    title: 'Apple Advanced Stream',
    url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
  },
];

const VideoPlayer = () => {
  const [selectedVideo] = useState(HLS_VIDEOS[0]);
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: any) => {
    console.error('Video player error:', err);
    setError('Error playing the video. Please try again later.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedVideo.title}</Text>

      <View style={styles.playerContainer}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <VideoControls
            source={{ uri: selectedVideo.url }}
            style={styles.videoPlayer}
            resizeMode="contain"
            onError={handleError}
            repeat={false}
            disableVolume={false}
            disableBack={true}
            disableFullscreen={false}
          />
        )}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    backgroundColor: '#333',
    color: 'white',
  },
  playerContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default VideoPlayer;
