import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [gradePoints, setGradePoints] = useState({
    'A+': '',
    A: '',
    'A-': '',
    'B+': '',
    B: '',
    'B-': '',
    'C+': '',

    C: '',
    'C-': '',
    'D+': '',
    D: '',
    'D-': '',
    E: '',
  });

  const [courseCounts, setCourseCounts] = useState({
    year1: 0,
    year2: 0,
    year3: 0,
    year4: 0,
  });

  const [textFields, setTextFields] = useState({
    year1: [],
    year2: [],
    year3: [],
    year4: [],
  });

  const [button, setButton] = useState('');

  const viewGpa = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let year = 1; year <= 4; year++) {
      for (let i = 0; i < courseCounts[`year${year}`]; i++) {
        const grade = textFields[`year${year}`][i].grade;
        const credit = textFields[`year${year}`][i].credit;

        totalGradePoints += getGradePoints(grade) * credit;
        totalCredits += credit;
      }
    }

    const gpa = totalGradePoints / totalCredits;
    setButton(gpa.toFixed(4));
  };

  const getGradePoints = grade => {
    return gradePoints[grade] ? parseFloat(gradePoints[grade]) : 0;
  };

  const setGradePoint = (grade, value) => {
    setGradePoints(prevGradePoints => ({
      ...prevGradePoints,
      [grade]: value,
    }));
  };

  const handleOkPress = year => {
    const fields = [];
    for (let i = 0; i < courseCounts[year]; i++) {
      fields.push({
        grade: '',
        credit: 0,
      });
    }
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: fields,
    }));
  };

  const handleCountChange = (year, value) => {
    setCourseCounts(prevCounts => ({
      ...prevCounts,
      [year]: parseInt(value) || 0,
    }));
  };

  const handleGradeChange = (year, index, grade) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].grade = grade;
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: updatedFields,
    }));
  };

  const handleCreditChange = (year, index, credit) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].credit = parseInt(credit) || 0;
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: updatedFields,
    }));
  };

  return (
    <div className="container">
    <div className="container1">
      <div className="topicContainer">
        <h2 className="topic">GPA ESTIMATOR</h2>
      </div>
      <div className="firstSentContainer">
        <p className="firstSentence">
          You can enter your results and see GPA according to your degree
          program
        </p>
      </div>
      <div className="gradeTopicContainer">
        <p className='gradeTopic'>1. Add Grade Points According to Grades</p>
      </div>
      <div className="gpaListcontainer">
        <div className="gradeRow">
          <p className="gpaListText">A+</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, A_plus: e.target.value })}
          />
          <p className="gpaListText">A</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, A: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">A-</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, A_: e.target.value })}
          />
          <p className="gpaListText">B+</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, B_plus: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">B </p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, B: e.target.value })}
          />
          <p className="gpaListText">B-</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, B_: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">C+</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, C_plus: e.target.value })}
          />
          <p className="gpaListText">C </p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, C: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">C- </p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, C_: e.target.value })}
          />
          <p className="gpaListText">D+</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, D_plus: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">D </p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, D: e.target.value })}
          />
          <p className="gpaListText">D-</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, D_: e.target.value })}
          />
        </div>
        <div className="gradeRow">
          <p className="gpaListText">E</p>
          <input
            className="gpaTextInput"
            onChange={(e) => setGradePoints({ ...gradePoints, E: e.target.value })}
          />
        </div>
      </div>
      <div className="yearContainer">
        <p className="yearText">For year 1</p>
      </div>
      <div className="userValueContainer">
        <input
          className="firstTextInput"
          placeholder="Enter number of courses"
          onChange={(e) => handleCountChange("year1", e.target.value)}
        />
      </div>
      <div className="userValueContainer">
        <div className="scrollViewContent">
          {textFields.year1?.map((course, index) => (
            <div key={index} className="rowContainer">
              <input
                className="inputText gradeInput"
                placeholder={`Course ${index + 1} Grade`}
                onChange={(e) =>
                  handleGradeChange("year1", index, e.target.value)
                }
              />
              <input
                className="inputText creditInput"
                placeholder={`Course ${index + 1} Credit`}
                onChange={(e) =>
                  handleCreditChange("year1", index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <button className="viewGpaButton" onClick={viewGpa}>
        <p className="buttonText">View GPA</p>
      </button>

      <p className="gpaText">Your GPA is {button}</p>
    </div>
    <div className="container2">Container 2</div>
    </div>
  );
};

export default App;