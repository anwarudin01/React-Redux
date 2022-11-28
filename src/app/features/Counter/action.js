export const increment = (value) => {
  return {
    type: 'INC',
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: 'DEC',
    value: value,
  };
};
