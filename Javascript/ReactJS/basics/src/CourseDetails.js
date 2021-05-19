import React from "react";

function CourseDetails() {
  //   let courseData = {
  //     courseName: "Full Stack Web",
  //     rating: 4,
  //     noOfHours: 180,
  //     subCourses: ["HTML", "CSS", "Javascript", "Bootstrap", "React JS"],
  //     takeAways: ["lorem ipsum"],
  //   };

  let courseData = {
    courseName: "HTML",
    rating: 4,
    noOfHours: 6,
    subCourses: [],
    takeAways: [
      "Have a fundamental understanding of the Python programming language.",
      "Have the skills and understanding of Python to confidently apply for Python programming jobs.",
      "Acquire the pre-requisite Python skills to move into specific branches - Machine Learning, Data Science",
    ],
  };
  return (
    <div>
      <h3>Name:{courseData.courseName}</h3>
      <span>Rating:{courseData.rating}</span>
      <br />
      <span>{courseData.noOfHours}</span>
      {courseData.subCourses.length === 0 ? (
        <div>No Sub Courses</div>
      ) : (
        <ul>
          {courseData.subCourses.map((item, id) => (
            <li>{item}</li>
          ))}
        </ul>
      )}

      <ul>
        {courseData.takeAways.map((item)=>(
            <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
