import Day from "./Day";

export default function Week({ week, today }: { week: Date[]; today: Date }) {
  return (
    <tr>
      {week.map((day, i) => (
        <Day key={i} day={day} today={today} />
      ))}
    </tr>
  );
}
