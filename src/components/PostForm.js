import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer'
import { SafeAreaView } from 'react-navigation';


const PostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const lastEdited = new Date().toDateString();

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: "#343434", flex:1}}>
      <Spacer />
        <Text h3 style={styles.header}>Beep!</Text>
      <Spacer>
        <Input
          style={{color: '#fff'}}
          label='Title'
          inputStyle={{color: '#fff'}}
          labelStyle={{color: '#fff'}}
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
          labelStyle={{color: '#fff'}}
          inputStyle={{color: '#fff'}}
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
          buttonStyle={{backgroundColor: '#BB86F6'}}
          titleStyle={{color: '#282d34'}}
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
    color: '#BB86F6'
  },
  buttonContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: "center"
  }
});

export default PostForm;