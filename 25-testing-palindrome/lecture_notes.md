https://guides.rubyonrails.org/v5.2/testing.html

- Why Test?  
- Test Environments in `config/database.yml`
- Show contents of test folder
- Fixtures:  fancy name for "test data"

```yml
# retailers.yml

hostess:
  name: Hostess
  year_established: 1900

# snacks.yml
twinkies:
  name: Twinkies
  calories: 200
  deliciousness: 3
  retailer: hostess
```

- Don't put an ID for FK relationships to work

## Model Tests

- Go through `snack_test.rb` and explain all lines, especially `test "the truth"` and `assert true`

- Run test file:  `rails test test/models/snack_test.rb `

- Add a few basic tests.  Start with math, move on to snack objects.

```rb
  test "should not save a Snack without a name" do
    snack = Snack.new(calories: 500, deliciousness: 3)
    assert_not snack.save
  end
```

- Explain TDD, show how to add a more helpful message to the assert.  Also talk about retrieving data from fixtures:

```rb
  test "calories should be a number" do 
    twinkies = snacks(:twinkies)
    twinkies.calories = "Yummy"
    assert_not twinkies.save, "Saved snack with a string for calories"
  end
```

- Add `validates calories, numericality: true` to `snack.rb`

## Functional Tests

```rb
test "should get home" do 
  get root_path
  assert_response :success
end

test "submitting a word that is not a palindrome" do
  post palindrome_path, params: {word: "banana"}
  assert_response :success
  assert_select 'h1', "We're sorry! banana is not a palindrome!"
end

test "submitting a word that is a palindrome" do
  post palindrome_path, params: {word: "madam"}
  assert_response :success
  assert_select 'h1', "Congratulations! madam is a palindrome!"
end
```


## More model tests
```rb
    test "is case insensitive" do 
        assert Checker.new(word: "Madam").is_palindrome?
    end
```