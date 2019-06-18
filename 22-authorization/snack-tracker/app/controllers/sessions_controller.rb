class SessionsController < ApplicationController
  def new
  end

  def create

    # get the user from the database
    @user = User.find_by(username: params[:username])
    # if they're right
    if @user && @user.authenticate(params[:password])
        # set a cookie with that user's ID
        session["user_id"] = @user.id
        redirect_to snacks_path
    else
    # if they're wrong
        # re-do the page
        flash.notice = "No username/password combination found."
        render :new
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end
