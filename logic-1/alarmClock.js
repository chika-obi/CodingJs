function alarmClock(day, vacation) {
  // Check if we are on vacation
  if (vacation) {
    // On vacation, set the alarm to "10:00" on weekdays and "off" on weekends
    return (day >= 1 && day <= 5) ? "10:00" : "off";
  } else {
    // Not on vacation, set the alarm to "7:00" on weekdays and "10:00" on weekends
    return (day >= 1 && day <= 5) ? "7:00" : "10:00";
  }


// Test cases
console.log(alarmClock(1, false)); // Should return 7:00
console.log(alarmClock(5, false)); // Should return 7:00
console.log(alarmClock(0, false)); // Should return 10:00
