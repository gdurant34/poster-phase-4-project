class ChangeDescriptionInGroups < ActiveRecord::Migration[6.1]
  def change
    change_column :groups, :description, :text
  end
end
