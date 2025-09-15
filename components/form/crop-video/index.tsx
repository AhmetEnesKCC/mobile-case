import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, View } from "react-native";
import Scrubber from "./scrubber";
import TextInput from "./text-input";
import VideoInput from "./video-input";

export const CropVideoForm = () => {
  const { control, handleSubmit, watch } = useForm<CropFormType>({
    defaultValues: {
      video_uri: "",
      name: "",
      description: "",
      cropped_seconds: [null, null],
    },
  });

  const onSubmit = (data: CropFormType) => {};

  const values = watch();

  const isDisabled = useMemo(() => {
    if (
      !values.name ||
      !values.description ||
      (values.cropped_seconds.every((end) => end === null) && !values.video_uri)
    ) {
      return true;
    }
    return false;
  }, [values]);

  return (
    <View className="gap-4">
      <Controller
        control={control}
        name="video_uri"
        render={({ field: { value, onChange } }) => (
          <VideoInput value={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="cropped_seconds"
        render={({ field: { value, onChange } }) => (
          <Scrubber placeholder="Name" ends={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <TextInput placeholder="Name" value={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder="Description"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Button
        disabled={isDisabled}
        title="Submit Crop"
        onPress={handleSubmit(onSubmit)}
      ></Button>
    </View>
  );
};
