// simple function

// simple function
function callTheForce(forceElement) {
  if (forceElement === "lightning") {
    document.write(`You called the ⚡ power`);
  }

  if (forceElement === "fire") {
    document.write(`You called the 🔥 power`);
  }

  if (
    forceElement === "telekinesis" ||
    forceElement === "mind control" ||
    forceElement === "mind reading" ||
    forceElement === "telepathy"
  ) {
    document.write(`You called the 🧠 power`);
  }

  if (
    forceElement === "jump" ||
    forceElement === "speed" ||
    forceElement === "strength"
  ) {
    document.write(`You called the 🦾 power`);
  }
}

// get the power from the user
// based on the power, print a message with the following emojis:
// lightning - ⚡
// fire - 🔥
// telekinesis - 🧠
// mind control - 🧠
// mind reading - 🧠
// telepathy - 🧠
// jump - 🦾
// speed - 🦾
// strength - 🦾

const power = prompt(`What power do you want to call?`);

callTheForce(power);
