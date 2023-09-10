class CreateImpressions < ActiveRecord::Migration[7.0]
  def change
    create_table :impressions do |t|
      t.string :handle, index: true
      t.string :name
      t.string :ip

      t.timestamps
    end

    add_index :impressions, :created_at
  end
end
