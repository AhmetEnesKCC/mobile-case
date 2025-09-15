import { CropVideoForm } from "@/components/form/crop-video";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  return (
    <SafeAreaView
      className="flex-1 "
      edges={{ top: Platform.select({ ios: "off", android: "additive" }) }}
    >
      <CropVideoForm />
    </SafeAreaView>
  );
}
