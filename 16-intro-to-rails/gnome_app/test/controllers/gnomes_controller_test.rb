require 'test_helper'

class GnomesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gnomes_index_url
    assert_response :success
  end

  test "should get show" do
    get gnomes_show_url
    assert_response :success
  end

end
