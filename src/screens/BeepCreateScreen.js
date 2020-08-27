import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context } from "../context/BeepContext";
import PostForm from "../components/PostForm";

const BeepCreateScreen = ({ navigation }) => {
  const { addPost } = useContext(Context);

  return (
    <PostForm
      onSubmit={(title, content, lastEdited) => {
        addPost(title, content, lastEdited, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default BeepCreateScreen;
