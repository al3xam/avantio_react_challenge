import { useAppSelector } from "../../store/hooks";

const GoStep3 = () => {
  const { data } = useAppSelector((state) => state.app?.stepper);

  const submitForm = () => {
    console.log("Envío");
  };

  return (
    <div className="m-8">
      <div className="my-8">
        <header className="text-3xl">Accommodation</header>
        <div className="form-container">
          <div>
            <label>Name:</label> <span>{data.accommodation.name}</span>
          </div>
          <div>
            <label>Address:</label> <span>{data.accommodation.address}</span>
          </div>
          <div>
            <label>Description:</label>{" "}
            <span>{data.accommodation.description}</span>
          </div>
          <div>
            <label>Type:</label> <span>{data.accommodation.type}</span>
          </div>
          <div>
            <label>Photos</label>
            <div className="flex my-4 gap-2">
              <div>Photo 1</div>
              <div>Photo 2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8g">
        <header className="text-3xl">Owner</header>
        <div className="form-container">
          <div>
            <label>Name:</label> <span>{data.owner.name}</span>
          </div>
          <div>
            <label>Email:</label> <span>{data.owner.email}</span>
          </div>
          <div>
            <label>Phone:</label> <span>{data.owner.phone}</span>
          </div>
        </div>
      </div>

      <button type="button" className="my-8" onClick={() => submitForm()}>
        Submit
      </button>
    </div>
  );
};

export default GoStep3;
