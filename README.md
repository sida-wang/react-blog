# Basic React Blog
Just a simple blog to allow me to record anything of interest as I continue learning all things related to code. 

## Stack
Using a PERN stack
- Postgres
- Express
- React
- Node

## Status
Basic posting functionality is complete which allows for creation, updating and deletion of posts using github flavoured markdown.
The ability to create and edit tags has been setup but still needs the ability to link to posts.
Express API is mostly setup equipped to deal with CRUD requests as required, endpoints are still being created based on functionality required by the app. 

## Todo 
- Add in the ability to delete tags
- Add ability to link tags to posts and sort posts by tag
- Identify most appropriate way of removing hyperlink when viewing a single post (Likely modifying the render return for a single post)
- Update aethestics using CSS
- Gate all modifying functionality behind an admin login (i.e. hide buttons and disable endpoint access)
- Deploy to personal website