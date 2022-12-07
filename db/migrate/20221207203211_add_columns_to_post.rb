class AddColumnsToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :title, :string
    add_column :posts, :image, :string
    add_column :posts, :content, :text
  end
end
