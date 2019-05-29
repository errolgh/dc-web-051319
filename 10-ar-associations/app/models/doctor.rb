class Doctor < ActiveRecord::Base
    belongs_to :hospital
    has_many :doctor_patients
    has_many :patients, through: :doctor_patients

    # belongs_to :hospital
    # def hospital
    #     Hospital.all.find do |hospital|
    #         hospital.doctor == self
    #     end
    # end

end