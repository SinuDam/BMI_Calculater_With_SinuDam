function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultBox = document.getElementById('resultBox');
  const bmiValue = document.getElementById('bmiValue');
  const bmiCategory = document.getElementById('bmiCategory');

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiValue.textContent = 'Please enter valid numbers';
    bmiCategory.textContent = '';
    resultBox.style.backgroundColor = '#f9c0c0';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(1);
  let category = '';
  let color = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#f4d03f';
  } else if (bmi < 24.9) {
    category = 'Normal';
    color = '#58d68d';
  } else if (bmi < 29.9) {
    category = 'Overweight';
    color = '#f5b041';
  } else {
    category = 'Obese';
    color = '#ec7063';
  }

  bmiValue.textContent = `Your BMI: ${bmiRounded}`;
  bmiCategory.textContent = `Category: ${category}`;
  resultBox.style.backgroundColor = color;
}
