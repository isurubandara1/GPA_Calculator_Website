import React, { useState } from "react";
import "./App.css";
import oneImage from './assets/4.jpg'

const App = () => {
  const [gradePoints, setGradePoints] = useState({
    "A+": "",
    A: "",
    "A-": "",
    "B+": "",
    B: "",
    "B-": "",
    "C+": "",

    C: "",
    "C-": "",
    "D+": "",
    D: "",
    "D-": "",
    E: "",
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

  const [button, setButton] = useState("0");
  const [showModal, setShowModal] = useState(false);

  const viewGpa = () => {
    // Check if any of the course counts are zero
    const noCoursesEntered = Object.values(courseCounts).some(
      (count) => count === 0
    );

    if (noCoursesEntered) {
      alert("Please, You should enter values before view GPA");
      return;
    }

    // Calculate GPA if course values are entered
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

  const getGradePoints = (grade) => {
    return gradePoints[grade] ? parseFloat(gradePoints[grade]) : 0;
  };

  const setGradePoint = (grade, value) => {
    setGradePoints((prevGradePoints) => ({
      ...prevGradePoints,
      [grade]: value,
    }));
  };

  const handleOkPress = (year) => {
    const fields = [];
    for (let i = 0; i < courseCounts[year]; i++) {
      fields.push({
        grade: "",
        credit: 0,
      });
    }
    setTextFields((prevTextFields) => ({
      ...prevTextFields,
      [year]: fields,
    }));
  };

  const handleCountChange = (year, value) => {
    setCourseCounts((prevCounts) => ({
      ...prevCounts,
      [year]: parseInt(value) || 0,
    }));
  };

  const handleGradeChange = (year, index, grade) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].grade = grade;
    setTextFields((prevTextFields) => ({
      ...prevTextFields,
      [year]: updatedFields,
    }));
  };

  const handleCreditChange = (year, index, credit) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].credit = parseInt(credit) || 0;
    setTextFields((prevTextFields) => ({
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
        <div className="gpaListcontainer">
        <div className="firstSentContainer">
          <p className="firstSentence">
            You can enter your results and see GPA according to your degree
            program
          </p>
        </div>
        <div className="gradeTopicContainer">
          <p className="gradeTopic">1. Add Grade Points According to Grades</p>
        </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className="gpaListText">A+</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    autoFocus="true"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, A_plus: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">A</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, A: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="gpaListText">A-</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, A_: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">B+</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, B_plus: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="gpaListText">B-</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, B_: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">C+</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, C_plus: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="gpaListText">C</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, C: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">C-</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, C_: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="gpaListText">D+</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, D_plus: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">D</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, D: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="gpaListText">D-</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, D_: e.target.value })
                    }
                  />
                </td>
                <td>
                  <p className="gpaListText">E</p>
                </td>
                <td>
                  <input
                    className="gpaTextInput"
                    onChange={(e) =>
                      setGradePoints({ ...gradePoints, E: e.target.value })
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="yearTopicContainer">
          <p className="yearTopic">
            2. Enter the number of courses in the text fields below and click
            the OK button for the respective year
          </p>
        </div>

        <div>
          {[1, 2, 3, 4].map((year) => (
            <div key={year}>
              <div className="yearContainer">
                <p className="yearText">For year {year}</p>
              </div>
              <div className="userValueContainer">
                <input
                  className="firstTextInput"
                  type="number"
                  onChange={(e) =>
                    handleCountChange(`year${year}`, e.target.value)
                  }
                  min="0"
                  max="100"
                />
                <div className="okButtonContainer">
                  <button
                    className="okButton"
                    onClick={() => handleOkPress(`year${year}`)}
                  >
                    OK
                  </button>
                </div>
              </div>
              <div className="userValueContainer">
                <div className="scrollViewContent">
                  {textFields[`year${year}`]?.map((course, index) => (
                    <div key={index} className="rowContainer">
                      <input
                        className="gradeInput"
                        type="text"
                        autoFocus={index === 0}
                        placeholder={`Course ${index + 1} Grade`}
                        onChange={(e) =>
                          handleGradeChange(
                            `year${year}`,
                            index,
                            e.target.value
                          )
                        }
                      />
                      <input
                        className="creditInput"
                        type="number"
                        placeholder={`Course ${index + 1} Credit`}
                        onChange={(e) =>
                          handleCreditChange(
                            `year${year}`,
                            index,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="gpaButtonContainer">
          <button className="viewGpaButton" onClick={viewGpa}>
            <p className="buttonText">View GPA</p>
          </button>
        </div>
        <p className="gpaText">Your GPA is {button}</p>
      </div>
      <div className="container2"><img className="rightImage"src={oneImage} alt="Image 1" /></div>
    </div>
  );
};

export default App;
