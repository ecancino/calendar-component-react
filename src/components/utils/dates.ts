type DateParts = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  weekDay: number;
  monthName: string;
  daysInMonth: number;
};

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function getMonthName(date: Date, locale = "en-US") {
  return date.toLocaleString(locale, { month: "long" });
}

export function getDate(date: Date): DateParts {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const weekDay = date.getDay();

  return {
    year,
    month,
    day,
    hours,
    minutes,
    weekDay,
    monthName: getMonthName(date),
    daysInMonth: getDaysInMonth(year, month + 1),
  };
}

export function isSameDay(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}
