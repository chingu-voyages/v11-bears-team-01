export default callback => {
  const handleSubmit = e => {
    e && e.preventDefault();
    callback();
  };

  return {
    handleSubmit
  };
};
