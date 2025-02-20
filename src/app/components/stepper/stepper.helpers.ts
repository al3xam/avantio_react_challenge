export const initialValues = {
  name: "",
  address: "",
  description: "",
  type: "",
  images: [],
  owner: "",
  email: "",
  phone: "",
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const randomAlertMessage = () => {
  const messages = [
    "¡Registro exitoso! Tu información ha sido guardada correctamente",
    "¡Todo listo! Te has registrado con éxito",
    "Formulario enviado correctamente. Gracias por completar el registro",
    "Registro completado. Ahora puedes acceder a tu cuenta sin problemas",
    "¡Éxito! Tu registro ha sido procesado con éxito",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
