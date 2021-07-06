function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue <= 400) {
    return ("This one is on me!")
  } else if (someValue > 2000 && someValue < 2500) {
    return ("I will gladly take your thirty bucks.")
  } else if (someValue > 2500) {
    return ("No can do.")
  }
}

function ternaryCheckCity(someCity) {
  // Write your code here!
  return someCity === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(someTip) {
  // Write your code here!
  let charmLevel
  switch (someTip) {
    case 'generous': return charmLevel = "Thank you so much.";
    case 'not as generous': return charmLevel = "Thank you.";
    default:
      return charmLevel = "Bye.";

  }

}

