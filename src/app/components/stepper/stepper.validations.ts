import * as Yup from "yup";

export const validationSchema = [
  Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Solo se permiten letras")
      .min(4, "Debe tener al menos 4 caracteres")
      .max(128, "No puede exceder 128 caracteres")
      .required("Campo obligatorio"),
    address: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .max(128, "No puede exceder 128 caracteres")
      .required("Campo obligatorio"),
    description: Yup.string(),
    type: Yup.string().required("Debes seleccionar un tipo"),
    images: Yup.array().max(2, "Solo se pueden subir 2 imágenes"),
  }),
  Yup.object({
    owner: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .max(64, "No puede exceder 64 caracteres")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("Debe ser un correo electrónico válido")
      .required("Campo obligatorio")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "El correo electrónico debe contener una @ antes del dominio"
      ),
    phone: Yup.string().matches(
      /^\d{9}$/,
      "El teléfono debe contener exactamente 9 números"
    ),
  }),
];
