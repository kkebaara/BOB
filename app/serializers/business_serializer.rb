class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :industry, :description
end
