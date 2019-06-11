* Objectives
    - Review CRUD capabilities for single model
    - Create associations between two models
    - Use a dropdown select in a form
    - Create a model instance and its associated instances from a single form
        - `accepts_nested_attributes_for :snacks` on Retailer model
        - in New action:  `@retailer.snacks.build`
        - ```
            <%= f.fields_for :snacks do |snack| %>
            <%= snack.label :name %>
            <%= snack.text_field :name %>
            <%= snack.label :calories %>
            <%= snack.number_field :calories %>
            <%= snack.label :deliciousness %>
            <%= snack.select :deliciousness, (1..10) %>```



* Questions
    - Using rake routes, paths, prefixes
    - Use a form outside of a new/edit page
    - Using partial forms
    - Form_tag / Form_for