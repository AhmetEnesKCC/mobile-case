import { useVideoStore } from "@/store/stores/video.store";
import { trimVideo } from "@/utils/video/trim-video";
import { faker } from "@faker-js/faker";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Button, View } from "react-native";
import Scrubber from "./scrubber";
import TextInput from "./text-input";
import VideoInput from "./video-input";

export const CropVideoForm = () => {
  const { control, handleSubmit, watch } = useForm<CropFormType>({
    defaultValues: {
      video: {},
      name: "",
      description: "",
      cropped_seconds: [null, null],
    },
  });

  const { data, mutate, isPending } = useMutation({
    mutationKey: ["clip-video"],
    onSuccess: (cropped_uri) => {
      addVideo({
        description: values.description,
        name: values.name,
        uri: cropped_uri,
        id: faker.string.uuid(),
      });
    },
    mutationFn: async () => {
      const cropped_uri = await trimVideo(
        values.video.uri,
        values.cropped_seconds[0],
        values.cropped_seconds[1]
      );
      return cropped_uri;
    },
  });

  const { addVideo } = useVideoStore();

  const onSubmit = (data: CropFormType) => {
    mutate();
  };

  const values = watch();

  const isDisabled = useMemo(() => {
    if (
      !values.name ||
      !values.description ||
      (values.cropped_seconds.every((end) => end === null) && !values.video)
    ) {
      return true;
    }
    return false;
  }, [values]);

  console.log(values);

  return (
    <View className="gap-4">
      <Controller
        control={control}
        name="video"
        render={({ field: { value, onChange } }) => (
          <VideoInput value={value} onChange={onChange} />
        )}
      />
      {values.video.uri && (
        <Controller
          control={control}
          name="cropped_seconds"
          render={({ field: { value, onChange } }) => (
            <Scrubber
              size={values.video.duration}
              placeholder="Name"
              ends={value}
              onChange={onChange}
            />
          )}
        />
      )}
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
      <View className="flex items-center gap-2 flex-row justify-center">
        <Button
          disabled={isDisabled || isPending}
          title={isPending ? "Cropping" : "Submit Crop"}
          onPress={handleSubmit(onSubmit)}
        ></Button>
        {isPending && <ActivityIndicator />}
      </View>
    </View>
  );
};
