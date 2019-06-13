class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find(params[:id])
  end

  def new
    @teacher = Teacher.new
  end

  def create
    @teacher = Teacher.new(teacher_params)

    if @teacher.valid?
      @teacher.save
      redirect_to teacher_path(@teacher)
    else
      render :new
    end

  end

  private

  def teacher_params
    params.require(:teacher).permit(:name, :course_id)
  end


end
