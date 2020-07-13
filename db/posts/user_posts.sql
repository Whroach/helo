SELECT p.id, p.title, u.username, u.profile_pic FROM helo_posts AS p 
JOIN helo_users AS u ON p.author_id = u.id
WHERE u.id = $1