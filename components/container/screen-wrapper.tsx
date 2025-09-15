import { Feather } from "@expo/vector-icons";
import { clsx } from "clsx";
import { usePathname, useRouter } from "expo-router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const ScreenWrapper = ({
  children,
  ...props
}: SafeAreaViewProps & PropsWithChildren) => {
  const { canGoBack, back } = useRouter();
  let [canback, setCanBack] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (canGoBack()) {
      setCanBack(true);
    } else {
      setCanBack(false);
    }
  }, [pathname]);

  return (
    <SafeAreaView {...props} className={clsx("flex-1", props.className)}>
      {canback && (
        <View className="px-8">
          <TouchableOpacity
            onPress={() => {
              back();
            }}
          >
            <Feather name="chevron-left" color={"white"} size={32} />
          </TouchableOpacity>
        </View>
      )}
      <View className="flex-1 p-[20px]">
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
