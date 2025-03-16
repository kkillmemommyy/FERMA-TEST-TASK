// date: Timestamp
export const getFormattedDate = (date: string) => {
  const MS_IN_DAY = 86400000;
  
  const dateObj = new Date(Number(date));
  const today = new Date();

  const dayAgo = Math.floor((today.setHours(0, 0, 0, 0) - dateObj.setHours(0, 0, 0, 0)) / MS_IN_DAY);

  if (dayAgo === 0) {
    return `Сегодня`;
  }

  if (dayAgo === 1) {
    return `Вчера`;
  }

  const lastDigit = dayAgo % 10;

  const sufix =
    dayAgo >= 2 && dayAgo <= 4
      ? 'дня'
      : dayAgo >= 5 && dayAgo <= 20
      ? 'дней'
      : lastDigit === 1
      ? 'день'
      : lastDigit >= 2 && lastDigit <= 4
      ? 'дня'
      : 'дней';

  return `${dayAgo} ${sufix} назад`;
};
