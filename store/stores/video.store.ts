import { VideoListType, VideoType } from "@/types/video";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { localStorage } from "../util";

type StoreType = {
  videos: VideoListType;
  addVideo(video: VideoType): void;
  removeVideo(id: VideoType["id"]): void;
  getVideo(id: VideoType["id"]): VideoType | undefined;
};

export const useVideoStore = create<StoreType>()(
  persist(
    (set, get) => ({
      videos: [],
      addVideo: (video) => {
        set({ videos: [...get().videos, video] });
      },
      removeVideo(id) {
        const filtered_videos = get().videos.filter((v) => v.id === id);
        set({ videos: filtered_videos });
      },
      getVideo(id) {
        const video = get().videos.find((v) => v.id === id);
        return video;
      },
    }),
    {
      name: "videos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
