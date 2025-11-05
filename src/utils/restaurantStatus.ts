// Opening hours: Mo, We-Su: 14:00-22:00, Tu: Closed
export const getRestaurantStatus = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Tuesday is closed (day 2)
  if (day === 2) {
    return {
      isOpen: false,
      message: "Gesloten vandaag",
      nextOpen: "Morgen open vanaf 14:00",
    };
  }

  // Check if current time is within opening hours (14:00 - 22:00)
  const openingTime = 14;
  const closingTime = 22;

  if (currentTime >= openingTime && currentTime < closingTime) {
    return {
      isOpen: true,
      message: `Open vandaag tot ${closingTime}:00`,
      nextOpen: null,
    };
  }

  // Restaurant is closed but will open today or tomorrow
  if (currentTime < openingTime) {
    return {
      isOpen: false,
      message: "Gesloten",
      nextOpen: `Vandaag open vanaf ${openingTime}:00`,
    };
  }

  // After closing time
  const nextDay = day === 1 ? "Woensdag" : "Morgen"; // If Monday, next is Wednesday
  return {
    isOpen: false,
    message: "Gesloten",
    nextOpen: `${nextDay} open vanaf ${openingTime}:00`,
  };
};

