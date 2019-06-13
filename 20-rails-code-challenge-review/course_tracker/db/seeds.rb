# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Course.delete_all
Teacher.delete_all

 math_course = Course.create!(name: "calculus", subject: "math", course_number: 200)
 biology_course = Course.create!(name: "Intro to Biology", subject: "biology", course_number: 101)
 art_course = Course.create!(name: "Design", subject: "art", course_number: 350)

 paul = Teacher.create!(name: "Paul", course_id: math_course.id)
