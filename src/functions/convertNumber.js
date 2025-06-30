function convertNumber(number = 0) {
  const numnber_string = number.toLocaleString();
  const arr = numnber_string.split(",");

  if (arr.length == 5) {
    // Trillion
    return arr[0] + "." + arr[1].slice(0, 2) + " T";
  } else if (arr.length == 4) {
    // Billion
    return arr[0] + "." + arr[1].slice(0, 2) + " B";
  } else if (arr.length == 3) {
    // Million
    return arr[0] + "." + arr[1].slice(0, 2) + " M";
  } else if (arr.length == 2) {
    // Thousand
    return arr[0] + "." + arr[1].slice(0, 2) + " K";
  } else {
    return arr[0];
  }
}

export default convertNumber;
