Rails.application.routes.draw do
    root 'checker#welcome'
    # get "/", to: "checker#welcome", as: "root"
    post "/palindrome", to: "checker#check"
end
