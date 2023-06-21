import { CSSProperties } from "react";

import { getDate } from "./utils/dates";
import { chunk, range } from "./utils/array";

import Week from "./Week";
import Header from "./Header";

const tableStyles: CSSProperties = {
  fontFamily: "monospace",
  margin: "1em",
  backgroundColor: "#ddd",
  borderCollapse: "collapse",
};

const captionStyles: CSSProperties = {
  backgroundColor: "#444",
  color: "white",
  padding: ".3em",
  fontSize: "1.3rem",
  lineHeight: "1.8rem",
};

export default function Calendar({ day }: { day: Date }) {
  const today = getDate(day);
  const weekDays = 7;
  const monthWeeks = 6;
  const monthDays = weekDays * monthWeeks;
  const startWeekDay = today.weekDay - 1;
  const daysWithPrefix = today.daysInMonth + startWeekDay;
  const dayDiff = monthDays - daysWithPrefix;
  const days = Array.from({ length: today.daysInMonth }).map(
    (_, i) => new Date(today.year, today.month, i + 1)
  );
  const prefixDays = range(startWeekDay);
  const suffixDays = range(dayDiff >= weekDays ? dayDiff - weekDays : dayDiff);
  const weeks = chunk([...prefixDays, ...days, ...suffixDays], weekDays);

  return (
    <table style={tableStyles}>
      <caption style={captionStyles}>
        {today.monthName} {today.year}
      </caption>
      <Header />
      <tbody>
        {weeks.map((week, i) => (
          <Week key={i} week={week} today={day} />
        ))}
      </tbody>
    </table>
  );
}
