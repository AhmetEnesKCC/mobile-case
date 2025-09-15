import * as MediaPicker from "expo-image-picker";

export const pickVideo = async () => {
  const result = await MediaPicker.launchImageLibraryAsync({
    allowsMultipleSelection: false,
    mediaTypes: "videos",
    base64: true,
  });
  if (!result.assets) {
    return { success: false, error: "The assets could not get" };
  }
  const asset = result.assets[0];
  return { success: true, data: asset };
};
