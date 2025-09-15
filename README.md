### Mobile Application Case for SevenApps


### Application brief:

Develop a React Native Video Diary App where users can:
• Import videos,
• Crop a specific segment of 5 seconds,
• Add details such as name and description,
• Save cropped videos to a list for future reference.
The app should prioritize simplicity, efficiency, and scalability, adhering to modern React Native development practices


### Application Requirements: 

1. Main Screen: Cropped Video List
• Display a list of previously cropped videos.
• Implement persistent storage (e.g., Zustand with AsyncStorage or an alternative state management solution).
• Allow users to tap a video in the list to navigate to the Details Page.
2. Details Page
• Display the selected video with its:
• Name,
• Description.
• Keep the UI minimalistic, focusing on the video and its associated metadata.
3. Crop Modal
• Step 1: Video Selection
• Allow users to select a video from their device.
4. Video Cropping
• Implement video cropping functionality using expo-trim-video.
• The trimVideo function under expo-trim-video script should execute via Tanstack Query, ensuring asynchronous
operations and a robust API integration.


### Starting The Case:


**IOS**
```sh
npm install && npx expo run:ios
```

**ANDROID**
```sh
npm install && npx expo run:android
```

Key considerations:

- Application scrumber logic is buggy, they will be fixed soon,
- Video trimming works well
- Video listing works well
- Refactoring for folder and files are necessary for some part of the application
- Test coverage is 0%, tests will be added
- Video Description page works well
- Back button implemented
- Loadings implemented
- Error handling not implemented

