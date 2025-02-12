

export const getNextDayDate = (dayName) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = days.indexOf(dayName); // Get the index of the day (0 for Sunday, 1 for Monday, etc.)

  if (dayIndex === -1) throw new Error("Invalid day name"); // Handle invalid day names

  const today = new Date();
  const daysToAdd = (dayIndex - today.getDay() + 7) % 7 || 7; // Calculate days to the next occurrence
  const nextDay = new Date(today.setDate(today.getDate() + daysToAdd)); // Get the next day

  // Format as 'YYYY/MM/DD'
  const year = nextDay.getFullYear();
  const month = String(nextDay.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(nextDay.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};


export const times_of_day = (start, end) => {
  // logic of mapping all times availability of doctor and not available
  let [s_hours, s_minutes] = start.split(":");
  let e_hours = end.split(":")[0];
  let end_time = parseInt(e_hours);
  let increment_min = parseInt(s_minutes);
  let times = [];

  for (let i = 7; i < end_time; i++) {
    increment_min += 30;
    if (increment_min > 60) {
      increment_min = 30;
    }
    times.push(`${i}:${increment_min === 60 ? "00" : increment_min}`);
  }

  return times;
};

export const is_available = (item, start, end, available) => {
  // availability of doctor from db
  return (
    parseInt(item) < parseInt(start) ||
    (parseInt(item) > parseInt(end) && !available)
  );
};

 export const convert_time = (time) => {
   // confvert the time
   const [hours, minutes] = time.split(":");
   const period = hours > 12 ? "PM" : "AM";
   const newHour = hours % 12 || 12;
   return `${newHour}:${minutes} ${period}`;
 };
