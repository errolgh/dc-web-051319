require 'test_helper'

class CheckersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get home page" do
    get root_path
    assert_response :success
  end

  test "submit a word that is not a palindrome" do 
    post palindrome_path, params: {word: "banana"}
    assert_response :success 
    assert_select "h1", "We're sorry!  banana is not a palindrome!"
  end

  test "submit a word that is a palindrome" do 
    post palindrome_path, params: {word: "madam"}
    assert_response :success 
    assert_select "h1", "Congratulations!  madam is a palindrome!"
  end

end
