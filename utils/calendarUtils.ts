export interface Day {
  date: Date;
  inMonth: boolean;
  isSelected: boolean;
}

export function generateDays(date: Date, selectedDate: Date): Day[] {
  const days: Day[] = [];

  // Determine the first day of the month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  // Determine the last day of the month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // Determine the number of days in the previous month
  const numDaysPrevMonth = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  // Determine the number of days in the current month
  const numDaysCurrentMonth = lastDay.getDate();

  // Determine the number of days in the next month
  const numDaysNextMonth = 6 - lastDay.getDay();

  // Generate days from the previous month
  for (let i = numDaysPrevMonth; i > 0; i--) {
    const day = new Date(date.getFullYear(), date.getMonth(), 1 - i);
    days.push({
      date: day,
      inMonth: false,
      isSelected: isSameDay(day, selectedDate),
    });
  }

  // Generate days from the current month
  for (let i = 1; i <= numDaysCurrentMonth; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i);
    days.push({
      date: day,
      inMonth: true,
      isSelected: isSameDay(day, selectedDate),
    });
  }

  // Generate days from the next month
  for (let i = 1; i <= numDaysNextMonth; i++) {
    const day = new Date(date.getFullYear(), date.getMonth() + 1, i);
    days.push({
      date: day,
      inMonth: false,
      isSelected: isSameDay(day, selectedDate),
    });
  }

  return days;
}

export function generateWeeks(days: Day[]): Day[][] {
  const weeks: Day[][] = [];
  const numDays = days.length;

  for (let i = 0; i < numDays; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
