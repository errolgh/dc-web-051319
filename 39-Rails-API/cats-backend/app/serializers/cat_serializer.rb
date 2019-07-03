class CatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :breed, :image, :hobbies
end
