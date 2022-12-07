# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting Group/User/Post data..."
User.destroy_all
Group.destroy_all
UserGroup.destroy_all
Post.destroy_all

puts "🏕 Seeding users..."
user1 = User.create(first_name: 'Caitlin', last_name: 'Smith', username: 'csmith', age: 23, password_digest: '1937h1')
user2 = User.create(first_name: 'Daniel', last_name: 'Jones', username: 'djones', age: 35, password_digest: '1217h1')
user3 = User.create(first_name: 'Ann', last_name: 'Williams', username: 'awilliams', age: 28, password_digest: '7247h5')

puts "🏕 Seeding groups..."
group1 = Group.create(name: 'Travel', owner: 'csmith', description: 'This group is for people who like to travel.', user: user2)
group2 = Group.create(name: 'Dance', owner: 'djones', description: 'This group is for people who like to dance.', user: user3)
group3 = Group.create(name: 'Dogs', owner: 'awilliams', description: 'This group is for people who like dogs.', user: user1)

puts "🏕 Seeding user_groups..."
userGroup1 = UserGroup.create(user: user1, group: group1)
userGroup2 = UserGroup.create(user: user3, group: group2)
userGroup3 = UserGroup.create(user: user2, group: group3)

puts "🏕 Seeding posts..."
post1 = Post.create(user: user1, group: group3)
post1 = Post.create(user: user2, group: group2)
post1 = Post.create(user: user3, group: group1)

puts "Seeding done!"
