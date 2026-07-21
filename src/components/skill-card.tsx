import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface SkillCardProps {
  title: string;
  progress: number;
  completed: number;
  total: number;
  color: string;
  icon?: string;
  locked?: boolean;
}

export function SkillCard({ title, progress, completed, total, color, locked = false }: SkillCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: locked ? '#F5F5F5' : color }]}>
      {locked ? (
        <View style={styles.lockedContent}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth={2}>
            <Path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </View>
      ) : (
        <>
          <Text style={styles.progress}>{progress}%</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.footer}>
            <Text style={styles.checkmark}>✔</Text>
            <Text style={styles.completedText}>{completed}/{total}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  lockedContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  checkmark: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  completedText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
});
