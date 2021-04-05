/* exported getStudentNames */

function getStudentNames(students) {
  var studentsArr = [];

  for (var i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    // console.log(studentName);
    studentsArr.push(studentName);
  }
  return (studentsArr);
}
