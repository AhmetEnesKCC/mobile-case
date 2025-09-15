export type VideoType = {
  uri: stirng;
  name: string;
  description: string;
  id: string | number; // Either uuid or auto increment, i choose uuid over auto incerement
};

export type VideoListType = VideoType[];
