Rails.application.routes.draw do
    root 'checker#welcome'
    post "/palindrome", to: "checker#check"
end
