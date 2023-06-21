import { ReactNode, CSSProperties } from "react";

const weekDayStyles: CSSProperties = {
  padding: ".6rem",
  fontSize: "1.1rem",
  lineHeight: "1.3rem",
};

function DayName({ children }: { children: ReactNode }) {
  return <th style={weekDayStyles}>{children}</th>;
}

export default function Header() {
  return (
    <thead>
      <tr>
        <DayName>Monday</DayName>
        <DayName>Tuesday</DayName>
        <DayName>Wednesday</DayName>
        <DayName>Thursday</DayName>
        <DayName>Friday</DayName>
        <DayName>Saturday</DayName>
        <DayName>Sunday</DayName>
      </tr>
    </thead>
  );
}
