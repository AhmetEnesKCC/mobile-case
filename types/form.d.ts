type CropSecondEndType = number | null;

type CropSecondEndsType = [CropSecondEndType, CropSecondEndType];

type CropFormType = {
  video: {
    uri: string;
    duration: number;
  };
  name: string;
  description: string;
  cropped_seconds: CropSecondEndsType;
};
