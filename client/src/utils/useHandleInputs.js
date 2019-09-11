import { useState } from "react";

export default initialState => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };
  return {
    handleChange,
    inputs,
    setInputs
  };
};
