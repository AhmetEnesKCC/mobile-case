type CropSecondEndType = number | null;

type CropSecondEndsType = [CropSecondEndType, CropSecondEndType];

type CropFormType = {
  video_uri: string;
  name: string;
  description: string;
  cropped_seconds: CropSecondEndsType;
};
