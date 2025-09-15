import { trimVideo as etrimVideo } from "expo-trim-video";
export const trimVideo = async (
  uri: string,
  start: number | null,
  end: number | null
) => {
  const result = await etrimVideo({
    uri,
    end: Math.abs(Math.floor(start ?? 5)),
    start: Math.abs(Math.floor(end ?? 0)),
  });
  return result.uri;
};
