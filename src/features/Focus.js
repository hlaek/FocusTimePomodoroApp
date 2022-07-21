import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Enter Focus Task"
          theme={{
            colors: {
              text: colors.black,
              placeholder: colors.teal,
              primary: colors.teal,
              underlineColor: colors.teal,
            },
          }}
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            title="+"
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    color: colors.pink,
  },
  button: {
    justifyContent: 'center',
  },
});
