import { CText } from "@/components/common/text";
import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

type PropsType = {
  ends: CropSecondEndsType;
  onChange: (ends: CropSecondEndsType) => void;
  placeholder: string;
  size: number;
};

const Scrubber = (props: PropsType) => {
  const [ends, setEnds] = useState<CropFormType["cropped_seconds"]>([
    null,
    null,
  ]);

  useEffect(() => {
    if (props.size < 5) {
      setEnds([0, props.size]);
    } else {
      setEnds([0, 5]);
    }
  }, [props.size]);

  const calculateEnd = (end_value: number | null) => {
    return ((end_value ?? 0) / props.size) * 100;
  };

  const thumb1Position = useSharedValue(0);
  const thumb2Position = useSharedValue(0);

  const panGesture1 = Gesture.Pan()
    .onUpdate((e) => {
      thumb1Position.value = e.translationX;
    })
    .onEnd((e) => {});

  const panGesture2 = Gesture.Pan()
    .onUpdate((e) => {
      thumb2Position.value = e.translationX;
    })
    .onEnd((e) => {});

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateX: thumb1Position.value - 10 }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: thumb2Position.value - 10 }],
  }));

  const thumbLocations = useMemo(() => {
    const [first_end, last_end] = ends;
    const first_location = calculateEnd(first_end);
    const last_location = calculateEnd(last_end);
    return [first_location, last_location];
  }, [ends, props.size]);

  useDerivedValue(() => {
    if (thumb2Position.value < 5) {
      thumb2Position.value = 5;
    }
    if (thumb2Position.value - thumb1Position.value !== 5) {
      thumb1Position.value = thumb2Position.value - 5;
    }
  }, [thumb1Position]);

  useDerivedValue(() => {}, [thumb1Position, thumb2Position]);

  return (
    <GestureHandlerRootView className="my-4 py-4 justify-center ">
      <CText>Total: {props.size} seconds</CText>
      <View className="px-4 my-4">
        <View className="h-[4px] w-full bg-white">
          <GestureDetector gesture={panGesture1}>
            <Animated.View
              style={[
                {
                  left: `${thumbLocations[0]}%`,
                },
                animatedStyle1,
              ]}
              className="absolute z-[20] top-[-8px] w-[20px] rounded-full aspect-square bg-red-500"
            ></Animated.View>
          </GestureDetector>
          <GestureDetector gesture={panGesture2}>
            <Animated.View
              style={[
                {
                  left: `${thumbLocations[1]}%`,
                },
                animatedStyle2,
              ]}
              className="absolute z-[21] top-[-8px] w-[20px] rounded-full aspect-square bg-yellow-500"
            ></Animated.View>
          </GestureDetector>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Scrubber;
