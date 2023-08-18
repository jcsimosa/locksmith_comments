class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :img
      t.string :Make
      t.string :Model
      t.string :Year
      t.string :code
      t.string :lishi
      t.string :test_blade

      t.timestamps
    end
  end
end
