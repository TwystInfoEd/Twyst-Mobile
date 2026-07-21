import { StyleSheet, View } from 'react-native';

export function BackgroundDecoration() {
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={[styles.icon, styles.topLeft]} />
      <View style={[styles.icon, styles.topRight]} />
      <View style={[styles.icon, styles.middleLeft]} />
      <View style={[styles.icon, styles.middleRight]} />
      <View style={[styles.icon, styles.bottomLeft]} />
      <View style={[styles.icon, styles.bottomRight]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E5E5E5',
  },
  topLeft: {
    top: 60,
    left: 40,
  },
  topRight: {
    top: 120,
    right: 50,
  },
  middleLeft: {
    top: '40%',
    left: 30,
  },
  middleRight: {
    top: '35%',
    right: 40,
  },
  bottomLeft: {
    bottom: '35%',
    left: 50,
  },
  bottomRight: {
    bottom: '40%',
    right: 30,
  },
});
