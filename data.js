// data.js - Managed Central Database
const comboRules = [
    { 
        a: "Asthma", 
        b: "COPD", 
        result: "J44.89", 
        note: "Combo Code" 
    }, // Digestive system
    { 
        a: "GERD",
        b: "barrett's esophagus",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "crohn's disease",
        b: "ulcerative colitis",
        result: "ulcerative colitis",
        note : "One code"
    },
    {
        a: "cirrhosis",
        b: "alcoholic cirrhosis",
        result: "alcoholic cirrhosis",
        note : "One code"
    },
    {
        a: "alcoholic cirrhosis",
        b: "Heptic Failure",
        result: "Both",
        note : "No Combo"
    }, // thyroid diseases.
    {
        a: "Thyroid disease",
        b: "Specified Thyroid",
        result: "Specified Thyroid",
        note : "One code"
    },
    {
        a: "Hypothyroidism",
        b: "Thyroid nodule",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Thyroid nodule",
        b: "Goiter",
        result: "Thyroid nodule",
        note : "One code"
    },
    {
        a: "Hyperthyroidism ",
        b: "Goiter",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Thyroiditis",
        b: "Hypothyroidism",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Thyromegaly",
        b: "Thyroid nodule",
        result: "Thyromegaly",
        note : "One code"
    },
    {
        a: "Hyperthyroidism",
        b: "Thyroid nodule",
        result: "Both",
        note : "No Combo"
    }, // psychiatric  
    {
        a: "Depression",
        b: "Bipolar",
        result: "Bipolar",
        note : "One code"
    },
    {
        a: "Depression",
        b: "Dysthymic disorder",
        result: "Dysthymic disorder",
        note : "One code"
    },
    {
        a: "Depression",
        b: "GAD (Generalized Anxiety Disorder)",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Depression",
        b: "Anxiety",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Bipolar",
        b: "GAD (Generalized Anxiety Disorder)",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Mixed Anxiety Depressive",
        b: "Mixed Anxiety Depressive recurrent",
        result: "Mixed Anxiety Depressive recurrent",
        note : "One code"
    },
    {
        a: "Panic Attack",
        b: "GAD (Generalized Anxiety Disorder)",
        result: "Both",
        note : "No combo"
    },
    {
        a: "Bipolar",
        b: "Bipolar II",
        result: "Bipolar II",
        note : "One code"
    },
    {
        a: "Recurrent Depression",
        b: "Bipolar",
        result: "Bipolar",
        note : "One code"
    },
    {
        a: "Recurrent depression",
        b: "Recurrent depression in remission",
        result: "Recurrent depression in remission",
        note : "One code"
    },
    {
        a: "Mood Disorder",
        b: "Specific psychiatric Condition",
        result: "Specific psychiatric Condition",
        note : "One code"
    },
    {
        a: "Psychosis",
        b: "GAD (Generalized Anxiety Disorder)",
        result: "Both",
        note : "One code"
    },
    {
        a: "Psychosis",
        b: "Bipolar",
        result: "Bipolar",
        note : "One code"
    },
    {
        a: "schizophrenia",
        b: "Schizoaffective disorder",
        result: "Schizoaffective disorder",
        note : "One code"
    },
    {
        a: "schizophrenia",
        b: "Bipolar",
        result: "Both",
        note : "No Combo"
    },
    {
        a: "Schizoaffective Bipolar Type",
        b: "Sever Type",
        result: "Schizoaffective Bipolar Type",
        note : "One code"
    },
    {
        a: "Schizoaffective Bipolar Type",
        b: "Schizophrenia",
        result: "Both",
        note : "No combo"
    },
    {
        a: "Paranoid schizophrenia",
        b: "Schizophrenia",
        result: "Paranoid schizophrenia",
        note : "One code"
    },
    {
        a: "Delusional",
        b: "Schizophrenia",
        result: "Schizophrenia",
        note : "One code"
    },
    {
        a: "Manic Disorder",
        b: "Bipolar",
        result: "Manic Disorder",
        note : "One code"
    },
    {
        a: "Manic Disorder",
        b: "Depression",
        result: "Manic Disorder",
        note : "One code"
    },
    {
        a: "Major Depressive Disorder",
        b: "Bipolar",
        result: "Bipolar",
        note : "One code"
    } // lipids
];

// This variable will be accessed by the main script in index.html
const allOptions = [...new Set(comboRules.flatMap(r => [r.a, r.b]))].sort();
