import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  onPress?: () => void;
}

export function Button({ title, variant = 'primary', onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.button,
      variant === 'primary' ? styles.primary : styles.secondary,
      pressed && styles.pressed,
    ]}>
      <Text style={[styles.text, variant === 'primary' ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#027FE3',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#027FE3',
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#027FE3',
  },
});
