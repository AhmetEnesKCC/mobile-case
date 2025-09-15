import React from "react";
import { Text, View } from "react-native";

type PropsType = {
  ends: CropSecondEndsType;
  onChange: (ends: CropSecondEndsType) => void;
  placeholder: string;
};

const Scrubber = (props: PropsType) => {
  return (
    <View>
      <Text>Scrubber</Text>
    </View>
  );
};

export default Scrubber;
