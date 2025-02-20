import Box from "@mui/material/Box";
import { StepProps } from "./stepper.types";
import TextField from "@mui/material/TextField";

const GoStep2 = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}: StepProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <header className="text-3xl my-2">Owner</header>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Name</label>
        <TextField
          name="owner"
          type="owner"
          placeholder="Name"
          value={values.owner}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.owner && Boolean(errors.owner)}
          helperText={touched.owner && errors.owner}
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Email</label>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Phone</label>
        <TextField
          name="phone"
          placeholder="Phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
      </div>
    </Box>
  );
};

export default GoStep2;
