// This import is required if you are defining react components in this module.
import React from 'react';
import Rive from '@rive-app/react-canvas';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <RiveAnimation.MyExampleComponent />
export const RiveAnimation = () => (
  <Rive src="https://public.rive.app/community/runtime-files/4642-9387-nao-spinner.riv" />
);
