class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :type, :description
end
