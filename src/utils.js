import { formatDistanceToNow, isSameDay } from "date-fns";

export const getNextBirthday = (birthday) => {
  if (!birthday) {
    return new Date();
  }
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth();

  const currentYear = new Date().getFullYear();

  return new Date(currentYear, month, day);
};

export const isYouBirthday = (birthday) => {
  return isSameDay(new Date(), getNextBirthday(birthday));
};
