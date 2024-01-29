const popupTypes = (styles) => {
  if (styles === 'success') {
    return 'default success';
  } if (styles === 'danger') {
    return 'default danger';
  }
  return 'default warning';
};

export default popupTypes;
