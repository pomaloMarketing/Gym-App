function MySchedulePage() {
  const mockSchedule = [
    { date: "2024-01-01", class: "Yoga", time: "10:00 AM" },
    { date: "2024-01-02", class: "Pilates", time: "12:00 PM" },
  ];

  return (
    <div>
      <h1>My Schedule</h1>
      <ul>
        {mockSchedule.map((item, index) => (
          <li key={index}>
            {item.date} - {item.class} at {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MySchedulePage;
