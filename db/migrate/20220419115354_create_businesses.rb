class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :image
      t.string :name
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
