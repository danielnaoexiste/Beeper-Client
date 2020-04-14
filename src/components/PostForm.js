import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer'
import { SafeAreaView } from 'react-navigation';
import { theme } from '../theming/themeProvider';

const PostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const lastEdited = new Date().toDateString();

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: theme.backgroundColor, flex:1}}>
      <Spacer />
        <Text h3 style={styles.header}>Beep!</Text>
      <Spacer>
        <Input
          style={{color: theme.textColor}}
          label='Title'
          inputStyle={{color: theme.textColor}}
          labelStyle={{color: theme.textColor}}
          blurOnSubmit={false}
          autoFocus
          placeholder='Title'
          value={title}
          onChangeText={text => setTitle(text)}
          returnKeyType={"next"}
          blurOnSubmit={false}
          onSubmitEditing={() => this.secondInput && this.secondInput.focus()}
          />

      </Spacer>
      <Spacer>
        <Input
          ref={secondInput => this.secondInput = secondInput}
          labelStyle={{color: theme.textColor}}
          inputStyle={{color: theme.textColor}}
          blurOnSubmit={false}
          label='Content'
          multiline
          numberOfLines={5}
          maxLength={256}
          textAlignVertical='top'
          placeholder='Content'
          value={content}
          onChangeText={text => setContent(text)}
          returnKeyType='done'
        />

      </Spacer>
      <View style={styles.buttonContainer}>
        <Button
          raised
          title="Save Beep"
          buttonStyle={{backgroundColor: theme.primaryColor}}
          titleStyle={{color: theme.foregroundColor}}
          onPress={() => onSubmit(title, content, lastEdited)}
        />
      </View>
    </SafeAreaView>
  );
};

PostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: theme.primaryColor
  },
  buttonContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: "center"
  }
});

export default PostForm;