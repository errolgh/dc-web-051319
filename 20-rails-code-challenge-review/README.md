
  Objectives
  -  Create the associations between models.
  - MVC
  - REST
  - CRUD
  - Form/Form Helpers
  - Validations

  **** A course can be taught by more than one teacher. Each teacher can only teach one course. ******































  Course.destroy_all
  Instructor.destroy_all


   math_course = Course.create!(subject: "Math", course_number: 267, name: "Calculus")
   chemistry_course = Course.create!(subject: "Chemistry", course_number: 111, name: "Intro To Chemistry")
   history_course = Course.create!(subject: "History", course_number: 102, name: "Western Civilization")


   joseph = Instructor.create!(name: "Joseph", course_id: math_course.id)
   jenny = Instructor.create!(name: "Jenny", course_id: chemistry_course.id)
   paul = Instructor.create!(name: "Paul", course_id: history_course.id)
   ann = Instructor.create!(name: "Ann", course_id: chemistry_course.id)
   will = Instructor.create!(name: "Will", course_id: math_course.id)
   manuel = Instructor.create!(name: "Emanuel", course_id: math_course.id)
