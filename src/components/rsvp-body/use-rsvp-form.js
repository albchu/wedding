import { useState } from "react";

const initialData = {
  name: "",
  email: "",
  attending: "",
  entree: "",
  plusOne: "",
  plusOneEntree: "",
  plusOneName: "",
  dietaryRestrictions: "",
};

export const useRSVPForm = () => {
  const [form, setFormState] = useState(initialData);

  const updateForm = (key, value) => {
    setFormState(state => ({ ...state, [key]: value }));
  };
  return {
    form,
    updateForm,
  };
};
