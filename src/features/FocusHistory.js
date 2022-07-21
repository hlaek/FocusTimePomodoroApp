import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  if (!history.length) {
    return <Text style={styles.item}>No focus items.</Text>;
  } else {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>Previous Tasks:</Text>
        <FlatList  data={history} renderItem={renderItem} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
