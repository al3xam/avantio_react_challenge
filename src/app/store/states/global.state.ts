export type initialStateType = {
  stepper: stepperProps;
};

export type stepperProps = {
  currentStep: number;
  data: stepperDataProps;
};

export const initialState: initialStateType = {
  stepper: {
    currentStep: 1,
    data: {
      accommodation: {
        name: "",
        address: "",
        description: "",
        type: "",
        photos: "",
      },
      owner: {
        name: "",
        email: "",
        phone: "",
      },
    },
  },
};

type stepperDataProps = {
  accommodation: accommodationData;
  owner: ownerData;
};

export type accommodationData = {
  name: string;
  address: string;
  description: string;
  type: string;
  photos: "";
};

export type ownerData = {
  name: string;
  email: string;
  phone: string;
};
