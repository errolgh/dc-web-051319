require_relative "../config/environment.rb"

Hospital.destroy_all
Doctor.destroy_all
Patient.destroy_all

sacred = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian",
    specialty: "Internal Medicine",
    hospital_id: sacred.id)
eliot = Doctor.find_or_create_by(name: "Eliot Reid", specialty: "Endocrinology",
    hospital: sacred)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery",
    hospital: sacred)

wilke = Patient.find_or_create_by(name: "Mrs Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimer's Patient")
ben = Patient.find_or_create_by(name: "Ben Sullivan")

wilke.doctors << turk
wilke.doctors << jd

binding.pry
0