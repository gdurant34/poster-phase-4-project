class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner, :description
end
