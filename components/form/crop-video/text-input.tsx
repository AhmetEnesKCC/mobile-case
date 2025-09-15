import { clsx } from "clsx";
import React from "react";
import { TextInput as RTextInput, View } from "react-native";

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

const TextInput = (props: PropsType & RTextInput["props"]) => {
  return (
    <View className="border-[1px] border-gray-500 p-3 ">
      <RTextInput
        {...props}
        className={clsx("text-white text-lg", props.className)}
        value={props.value}
        onChangeText={(t) => props.onChange(t)}
      ></RTextInput>
    </View>
  );
};

export default TextInput;
