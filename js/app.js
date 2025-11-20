function isEmptyString(str = "") {
  if (typeof str !== "string") {
    return false;
  }
  return str.length === 0;
}

console.log(isEmptyString(""));
console.log(isEmptyString("world"));


function convertToGel(priceUsd = 0, rate = 0) {
  if (!priceUsd || !rate) {
    return 0;
  }
  return priceUsd * rate;
}

console.log(convertToGel(10, 3.5));
console.log(convertToGel(100, 3.5));

function getCountryByCurrency(currency = "") {
  switch (currency) {
    case "USD":
      return "United States";
    case "EUR":
      return "European Union";
    case "GEL":
      return "Georgia";
    default:
      return "Unknown currency";
  }
}

console.log(getCountryByCurrency("USD"));
console.log(getCountryByCurrency("EUR"));
console.log(getCountryByCurrency("GEL"));
console.log(getCountryByCurrency("JPY")); 
