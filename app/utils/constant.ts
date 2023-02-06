export const numberWithCommas = x => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const greetingTime = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return 'Chào buổi sáng';
  } else if (hours >= 12 && hours < 17) {
    return 'Chào buổi chiều';
  } else {
    return 'Chào buổi tối';
  }
};
