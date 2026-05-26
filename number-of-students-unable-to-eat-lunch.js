//In the name of Cross
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let currentSandwich = 0;
  //When it's zero then and when it's the higher by one than the number of student then it's repeating
  let currentStudentsNumber = 0;
  while (
    students.length &&
    currentSandwich < sandwiches.length &&
    currentStudentsNumber < students.length
  ) {
    const student = students.shift();
    if (student == sandwiches[currentSandwich]) {
      currentSandwich++;
      currentStudentsNumber = 0;
    } else {
      students.push(student);
      currentStudentsNumber++;
    }
  }

  //students didn't eat
  return students.length;
};
//until none of the queue students want to take the top sandwich and are thus unable to eat.

/** Logical steps
 * loop around the students
 * take one of the sandwich
 * compare it both values
 * if didn't match return the students in queue
 * repeat until the same queue is repeating it self
 */
