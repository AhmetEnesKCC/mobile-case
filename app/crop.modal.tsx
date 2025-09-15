import { CropVideoForm } from "@/components/form/crop-video";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const qc = new QueryClient();

export default function ModalScreen() {
  return (
    <SafeAreaView
      className="flex-1 "
      edges={{ top: Platform.select({ ios: "off", android: "additive" }) }}
    >
      <QueryClientProvider client={qc}>
        <CropVideoForm />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
