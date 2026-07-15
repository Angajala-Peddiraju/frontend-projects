function calculateBMI() {

    let name = document.getElementById("name").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (name === "" || isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML =
            "Please enter all the details.";
        document.getElementById("category").innerHTML = "";
        return;
    }

    let heightInMeters = height / 100;

    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById("result").innerHTML =
        "Hello <b>" + name +
        "</b><br>Your BMI is <b>" + bmi + "</b>";

    let category = "";

    if (bmi < 18.5) {
        category = "⚠️ BMI Category : Underweight (Thin)";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = "🎉✨ Congratulations! You are in the Healthy Weight range. Keep it up! ✨🎉";
    }
    else if (bmi >= 25 && bmi < 30) {
        category = "⚠️ BMI Category : Overweight";
    }
    else {
        category = "🚨 BMI Category : Obese";
    }

    document.getElementById("category").innerHTML = category;
}

function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    document.getElementById("result").innerHTML = "";
    document.getElementById("category").innerHTML = "";

}