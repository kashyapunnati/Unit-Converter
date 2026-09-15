const valueInput = document.getElementById("value");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const message = document.getElementById("message");

function convertLength(value, from, to) {

    const lengthUnits = {
        meter: 1,
        kilometer: 1000,
        feet: 0.3048,
        mile: 1609.344
    };

    const valueInMeters = value * lengthUnits[from];

    return valueInMeters / lengthUnits[to];
}

function convertWeight(value, from, to) {

    const weightUnits = {
        kilogram: 1,
        gram: 0.001,
        pound: 0.45359237,
        ounce: 0.028349523125
    };

    const valueInKilograms = value * weightUnits[from];

    return valueInKilograms / weightUnits[to];
}

function convertUnit() {

    const value = parseFloat(valueInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    message.textContent = "";

    if (valueInput.value === "") {
        result.textContent = "0";
        return;
    }

    if (isNaN(value)) {
        result.textContent = "0";
        message.textContent = "Please enter a valid number.";
        return;
    }

    const lengthUnits = ["meter", "kilometer", "feet", "mile"];

    const weightUnits = ["kilogram", "gram", "pound", "ounce"];

    let convertedValue;

    if (lengthUnits.includes(from) && lengthUnits.includes(to)) {

        convertedValue = convertLength(value, from, to);

    } else if (weightUnits.includes(from) && weightUnits.includes(to)) {

        convertedValue = convertWeight(value, from, to);

    } else {

        result.textContent = "Cannot convert";
        message.textContent =
            "Please select units from the same category.";
        return;
    }

    result.textContent = convertedValue.toFixed(2);
}

valueInput.addEventListener("input", convertUnit);
fromUnit.addEventListener("change", convertUnit);
toUnit.addEventListener("change", convertUnit);

convertUnit();

const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", convertUnit);