import store from "../../store/store";

import { updateCurrentStep } from "../../store/slices/global.slice";

export const nextStep = (currentStep: number) => {
  store.dispatch(updateCurrentStep(currentStep + 1));
};
