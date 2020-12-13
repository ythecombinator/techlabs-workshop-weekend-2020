import dayjs from 'dayjs';

export const format = (str: string, formatter: string) =>
  dayjs(str).format(formatter);

export const create = (str: string) => dayjs(str);

export const now = () => dayjs();
