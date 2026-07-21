import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SocialButtonProps {
  provider: 'Google' | 'Apple';
  onPress?: () => void;
}

export function SocialButton({ provider, onPress }: SocialButtonProps) {
  const getIcon = () => {
    if (provider === 'Google') {
      return (
        <View style={styles.icon}>
          <Text style={styles.iconText}>G</Text>
        </View>
      );
    }
    return (
      <View style={styles.icon}>
        <Text style={styles.iconText}></Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {getIcon()}
      <Text style={styles.text}>Continue with {provider}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
