const popupTypes = (styles) => {
  if (styles === 'success') {
    return 'default success';
  } if (styles === 'danger') {
    return 'default danger';
  }
  return 'default warning';
};

const popupShowConverter = (popupShow) => {
  if (popupShow === 1) {
    return true;
  }
  return false;
};

export { popupTypes, popupShowConverter };
