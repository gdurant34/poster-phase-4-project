Tables
Groups
Users
JoinUsersGroups
Posts


Groups:
Belongs to a user
Has many posts
Has many users through JoinUsersGroups

Columns:
Name
Owner
Description
Users:
Has many groups
Has many posts
Has many groups through JoinUsersGroups

Columns:
Name
Username
Age
Password
JoinUsersGroups:
Belongs to users
Belongs to groups

Columns:
User_id
Group_id
Posts:
Belongs to user
Belongs to group

Columns:
User_id
Group_id


User Stories:
I want to be able to look through a list of groups on a homepage.
I want to be able to create a new group and have it show up on the homepage.
I want to be able to search for groups in a search bar. 
I want to be able to sort by different things and filter as well on the homepage.
I want to be able to click on a join a group, or leave it if I’m already a part.
I want to go to the groups page and see the groups posts when I click on a group.
I want to be able to make a post if I’m a member of that group.
If I own a group, I want to be able to remove any post in my group.
I want to be able to create a new user. I want to be able to change my password.
I want there to be a login page. 

React:

Components:
Homepage
GroupCard
GroupPage
UserCard
PostCard

NavigationBar
LogIn Page
CreateUserCard
CreatePost
CreateGroup

