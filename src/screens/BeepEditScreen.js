import React, {useContext} from "react";
import { StyleSheet } from 'react-native';
import { Context } from '../context/BeepContext'
import PostForm from '../components/PostForm'

const BeepEditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editPost } = useContext(Context);
    
    const beepPost = state.find(beepPost => beepPost._id === id)

    return <PostForm 
      initialValues={{ title: beepPost.title, content: beepPost.content, lastEdited: new Date().toDateString() }}
      onSubmit={(title, content, lastEdited) => {
      editPost(id, title, content, lastEdited,  () => navigation.navigate('BeepDetail', {title, content, lastEdited}))
    }} />
}

const styles = StyleSheet.create({});

export default BeepEditScreen;