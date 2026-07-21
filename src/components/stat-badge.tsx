import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface StatBadgeProps {
  icon: 'flame' | 'sparkle';
  value: string;
}

export function StatBadge({ icon, value }: StatBadgeProps) {
  const getIcon = () => {
    if (icon === 'flame') {
      return (
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth={2}>
          <Path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      );
    }
    return (
      <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth={2}>
        <Path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      {getIcon()}
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  value: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },
});
