class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :nombre
      t.string :email
      t.string :image

      t.timestamps
    end
  end
end
