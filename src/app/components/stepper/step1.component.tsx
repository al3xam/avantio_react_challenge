import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import { StepProps } from "./stepper.types";
import { useRef, useState } from "react";
import { useFormikContext } from "formik";
import { convertToBase64 } from "./stepper.helpers";

const GoStep1 = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}: StepProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const { setFieldError, setFieldValue } = useFormikContext();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files ? Array.from(event.target.files) : [];

    if (files.length + values?.images?.length > 2) {
      setFieldError("images", "Solo puedes subir hasta 2 imágenes.");
      return;
    }

    const base64Images = await Promise.all(
      files.map((file) => convertToBase64(file))
    );

    setPreviewImages([...previewImages, ...base64Images]);
    setFieldValue("images", [...values.images, ...base64Images]);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <header className="text-3xl my-2">Accommodation</header>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Name</label>
        <TextField
          required
          fullWidth
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Address</label>
        <TextField
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label className="font-bold">Description</label>
        <TextField
          name="description"
          placeholder="Descripción"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
      </div>

      <FormControl
        fullWidth
        margin="normal"
        error={touched.type && Boolean(errors.type)}
        className="flex gap-2 flex-col"
      >
        <label className="font-bold">Type</label>
        <Select
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="apartment">Apartament</MenuItem>
          <MenuItem value="villa">Villa</MenuItem>
          <MenuItem value="house">House</MenuItem>
        </Select>
        <FormHelperText>{touched.type && errors.type}</FormHelperText>
      </FormControl>

      <div className="my-4 flex gap-2 flex-col">
        <label className="font-bold">Photos</label>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              className="w-48 h-48 border flex justify-center items-center"
              disabled={previewImages.length >= 2}
            >
              Upload image
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />

            <div className="flex gap-2">
              {previewImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="preview"
                  className="w-48 h-48 border object-cover flex justify-center items-center rounded-[4px]"
                />
              ))}
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setPreviewImages([]);
              setFieldValue("images", []);
            }}
            className="w-48 h-48 border flex justify-center items-center"
            disabled={!previewImages.length}
          >
            Remove all images
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default GoStep1;
