import Typography from "@mui/material/Typography/Typography";
import { GoStep3Props } from "./stepper.types";
import Box from "@mui/material/Box";
import { capitalizeFirstLetter } from "./stepper.helpers";

const GoStep3 = ({ values }: GoStep3Props) => {
  const renderImages = () => {
    return (
      <div>
        <div className="flex gap-2">
          {values.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              className="w-48 h-48 border flex justify-center items-center rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <header className="text-3xl my-4">Accommodation</header>
      <Typography>
        <strong>Name:</strong> {values.name}
      </Typography>
      <Typography>
        <strong>Address:</strong> {values.address}
      </Typography>
      <Typography>
        <strong>Descripcion:</strong> {values.description}
      </Typography>
      <Typography>
        <strong>Type:</strong> {capitalizeFirstLetter(values.type)}
      </Typography>
      <div>
        <strong>Photos:</strong>
        <div className="flex my-4 gap-2">{renderImages()}</div>
      </div>

      <header className="text-3xl my-4">Owner</header>

      <Typography>
        <strong>Owner:</strong> {values.owner}
      </Typography>
      <Typography>
        <strong>Email:</strong> {values.email}
      </Typography>
      <Typography>
        <strong>Teléfono:</strong> {values.phone}
      </Typography>
    </Box>
  );
};

export default GoStep3;
