import { useAppSelector } from "../../store/hooks";
import { nextStep } from "./stepper.helpers";

const GoStep1 = () => {
  const { currentStep } = useAppSelector((state) => state.app?.stepper);

  return (
    <div className="m-8">
      <header className="text-3xl my-8">Owner</header>
      <div className="form-container">Formulario</div>

      <button
        type="button"
        className="my-8"
        onClick={() => nextStep(currentStep)}
      >
        NEXT
      </button>
    </div>
  );
};

export default GoStep1;
