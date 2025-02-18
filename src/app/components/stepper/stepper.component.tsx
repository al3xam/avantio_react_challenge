import { useAppSelector } from "../../store/hooks";

import GoStep1 from "./step1.components";
import GoStep2 from "./step2.components";
import GoStep3 from "./step3.components";

const GoStepperComponent = () => {
  const { currentStep } = useAppSelector((state) => state.app?.stepper);

  const showStep = (step: number) => {
    switch (step) {
      case 1:
        return <GoStep1 />;
      case 2:
        return <GoStep2 />;
      case 3:
        return <GoStep3 />;
    }
  };

  return showStep(currentStep);
};

export default GoStepperComponent;
