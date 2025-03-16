// date: Timestamp
export const getFormattedDate = (date: string) => {
  const MS_IN_DAY = 86400000;
  const dateObj = new Date(Number(date));
  const today = new Date();

  const dayAgo = Math.floor((today.setHours(0, 0, 0, 0) - dateObj.setHours(0, 0, 0, 0)) / MS_IN_DAY);

  const lastDigit = dayAgo % 10;
  const lastTwoDigits = dayAgo % 100;

  if (dayAgo === 0) {
    return `Сегодня`;
  }

  if (dayAgo === 1) {
    return `Вчера`;
  }

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${dayAgo} дней назад`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${dayAgo} дня назад`;
  }

  return `${dayAgo} дней назад`;
};
