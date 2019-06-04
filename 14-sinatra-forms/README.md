# Objectives
- Explain how and why we use the MVC pattern (Model-View-Controller)
- Map CRUD actions to RESTful routes

## Questions

- HTML Elements
- How everything fits together
- Yield and the like
- What should be passed around and when should things be instantiated (best pra ctices)

- Steps to use methods other than Get/Post:
    - At top of controller, `set :method_override, true`
    - Change form to POST
    - Add hidden form input: `        <input type="hidden" name="_method" value="PUT">`
