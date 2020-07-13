INSERT INTO helo_users (username, password, profile_pic)
VALUES 
( ${username}, ${password}, ${profilePic} )

returning id, username, profile_pic;