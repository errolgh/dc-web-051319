# README

Steps to add Password Capabilities:

- Uncomment `bcrypt` gem and bundle
- Add `has_secure_password` to User model
- Add password digest to User model:  
    - `rails g migration AddPasswordDigestToUsers password_digest:string`
