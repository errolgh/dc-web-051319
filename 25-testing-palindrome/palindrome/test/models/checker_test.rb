require 'test_helper'

class CheckerTest < ActiveSupport::TestCase
  test "the truth" do
    assert true
  end

  test "addition is a thing" do
    assert 2 + 2 == 4
  end

  test "division is a thing" do 
    assert 5.0 / 2 == 2.5, "can divide floats"
  end

  test "should not make a checker without a word" do
    checker = Checker.new
    assert_not checker.save
  end


  # test "should not make a checker without an email" do
  #   checker = Checker.new
  #   assert_not checker.save
  # end
end
