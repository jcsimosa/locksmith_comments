class CarSerializer < ActiveModel::Serializer
  attributes :id,:comment

  has_many :comments
end
