class CarSerializer < ActiveModel::Serializer
  attributes :id,:Make,:Model,:Year,:img,:lishi,:code,:test_blade,:comments

  has_many :comments
end
