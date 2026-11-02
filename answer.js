
// Question No. 1
function describeValue(value) {
  const type = typeof value;
  const truthorflase = value ? "truthy" : "falsy";
  return `${type} | ${truthorflase}`;
}

// console.log(describeValue(""));

// Question No. 2
function getDayType(day) {
  switch (String(day).toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// console.log(getDayType("ok"));

// Question No. 3
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

// console.log(validateUsername("Salfi"));

// Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare = (fare * 1.2).toFixed(2);
  }

  return fare;
}

// console.log(getCngFare(10));

// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// console.log(getChaseVerdict(150, 149, 1));