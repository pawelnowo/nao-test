// This import is required if you are defining react components in this module.
import React from 'react';
import Rive from 'rive-react-native';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <RiveAnimation.MyExampleComponent />
export const RiveAnimation = () => (
  <Rive
    url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
    artboardName="Avatar 1"
    stateMachineName="avatar"
    style={{ width: 400, height: 400 }}
  />
);
