class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :owner
      t.string :description
      t.belongs_to :user

      t.timestamps
    end
  end
end
