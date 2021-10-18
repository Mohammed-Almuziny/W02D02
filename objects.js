// CHALLENGE 1
const checkValues = (obj, value) => {
  return Object.values(obj).includes(value);
};

// CHALLENGE 2
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};

// CHALLENGE 3
const updateNumbers = (obj) => {
  newArr = [];
  for (const item in obj) {
    newArr.push(`${item}: ${obj[item]}`);
  }
  return newArr;
};

// CHALLENGE 4
const PassedOrFailed = function (studentGrades) {
  for (const key in studentGrades) {
    let grade = Object.values(studentGrades[key]);
    if (grade[0] < grade[1] / 2) {
      return "The student have failed";
    }
  }
  return "The student have passed";
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

// CHALLENGE 5
const totalCharacters = (arr) => {
    return arr.reduce( (acc, item) =>{
        acc += item.length;
        return acc;
    }, 0)
  };

// CHALLENGE 6 
  const houseSize = (arr) => {
      let sizes = [];
    for ( let i = 0; i <= arr.length; i++){
        if (typeof(arr[i]) == 'string') {
            sizes.push({ house: arr[i], members: arr[++i]})
            console.log(sizes);            
        }
    }
    return sizes
  };