const instructors = [
  { name: "Jane Doe", specialty: "Yoga" },
  { name: "Sarah Smith", specialty: "Pilates" },
  // Add more instructors
];

function InstructorsPage() {
  return (
    <div>
      <h1>Meet Our Instructors</h1>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>
            {instructor.name} - {instructor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorsPage;
