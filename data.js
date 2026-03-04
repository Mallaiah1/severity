// data.js - Managed Central Database
const comboRules = [
    { a: "Asthma", b: "COPD", result: "J44.89", note: "Chronic Obstructive Airway Disease" },
    { a: "Diabetes", b: "CKD", result: "E11.22", note: "Type 2 Diabetic Polynephropathy" },
    { a: "Hypertension", b: "Heart Failure", result: "I11.0", note: "Hypertensive Heart Disease with Heart Failure" },
    { a: "Anemia", b: "CKD", result: "D63.1", note: "Anemia in Chronic Kidney Disease" },
    { a: "Diabetes", b: "Hypertension", result: "I15.2", note: "Secondary hypertension due to endocrine disorders" }
];

// This variable will be accessed by the main script in index.html
const allOptions = [...new Set(comboRules.flatMap(r => [r.a, r.b]))].sort();