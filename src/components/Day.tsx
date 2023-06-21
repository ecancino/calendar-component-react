import { CSSProperties } from "react";
import { isSameDay } from "./utils/dates";

const dayStyles: CSSProperties = {
  textAlign: "right",
  color: "#444",
  backgroundColor: "#fff",
  border: "4px solid #ddd",
  width: "14%",
  padding: ".8em",
  fontSize: "1.1rem",
  lineHeight: "1.4rem",
};

const todayStyles: CSSProperties = {
  ...dayStyles,
  backgroundColor: "rgba(0, 100, 0, .7)",
  color: "white",
  fontWeight: "bold",
};

const noDayStyles: CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, .4)",
  border: "4px solid #ddd",
};

export default function Day({ day, today }: { day: Date; today: Date }) {
  const hasDay = day !== null;
  const isToday = hasDay ? isSameDay(day, today) : false;

  return (
    <td style={isToday ? todayStyles : hasDay ? dayStyles : noDayStyles}>
      {hasDay ? day.getDate() : null}
    </td>
  );
}
