// date: Timestamp
export const getFormattedDate = (date: number) => {
  const MS_IN_DAY = 86400000;

  const dateObj = new Date(date)

  const today = new Date();
  let dayAgo = Math.floor((today.getTime() - dateObj.getTime()) / MS_IN_DAY);
  const msRemains = today.getTime() - (dateObj.getTime() + dayAgo * MS_IN_DAY);
  const dateAgoMsRemains = new Date(today.getTime() - msRemains).getDate();

  dayAgo += today.getDate() !== dateAgoMsRemains ? 1 : 0;

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
