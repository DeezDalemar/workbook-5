let courseId = "PROG200";

let courses = [
   {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
   },
   {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
   },
   {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
   },
   {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
   },
   {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
   },
];

let courseTitle = courses.find(findCourseTitle);
console.log(`The title of the ${courseTitle.CourseId} is ${courseTitle.Title}`);

let cheapCourse = courses.filter(findCheapCourse);
console.log(`The courses cheaper than $50 are:`);
for (const course of cheapCourse) {
   console.log(course.Title);
}

let class1Courses = courses.filter(findClass1Courses);
console.log(`The classes in "Classroom 1" are:`);
for (const course of class1Courses) {
   console.log(course.Title);
}

function findCourseStartDate(course, courseId) {
   if (course.CourseId == courseId) {
      return true;
   } else {
      return false;
   }
}

let courseStartDate = courses.find(function (course) {
   return findCourseStartDate(course, courseId);
});
console.log(`The "${courseStartDate.Title}" starts at ${courseStartDate.StartDate}`);

function findCourseTitle(courses) {
   if (courses.CourseId == "PROJ500") {
      return true;
   } else {
      return false;
   }
}

function findCheapCourse(courses) {
   if (courses.Fee <= 50) {
      return true;
   } else {
      return false;
   }
}

function findClass1Courses(courses) {
   if (courses.Location == "Classroom 1") {
      return true;
   } else {
      return false;
   }
}
