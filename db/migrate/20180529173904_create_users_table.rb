class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t| #todos is name of table
        t.string :f_name
        t.string :l_name
        t.string :email
        t.string :password
      end
  end
end
