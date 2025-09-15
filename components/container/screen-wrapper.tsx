import { clsx } from "clsx";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const ScreenWrapper = ({
  children,
  ...props
}: SafeAreaViewProps & PropsWithChildren) => {
  return (
    <SafeAreaView {...props} className={clsx("flex-1", props.className)}>
      <View className="flex-1 p-[20px]">
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
