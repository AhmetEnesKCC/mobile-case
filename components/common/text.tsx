import { clsx } from "clsx";
import { Text } from "react-native";

export const CText = (props: Text["props"]) => {
  return (
    <Text {...props} className={clsx("text-white", props.className)}>
      {props.children}
    </Text>
  );
};
