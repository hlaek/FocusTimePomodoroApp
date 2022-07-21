import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { TextInput, ProgressBar, Colors } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';
import { Countdown } from '../components/Countdown';
import { Timing } from './Timing.js';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  0.0001 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: spacing.sm }}>
        <Text style={styles.title}>Task:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={(progress) => setProgress(progress)}
          isPaused={!isStarted}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.md }}>
        <ProgressBar
          progress={progress}
          color={colors.pink}
          style={{ height: spacing.md }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={85} title="Clear" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
});
