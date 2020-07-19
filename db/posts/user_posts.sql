-- SELECT p.id, p.title, u.username, u.profile_pic FROM helo_posts AS p 
-- JOIN helo_users AS u ON p.author_id = u.id
-- WHERE p.author_id = $1
SELECT p.id, p.title, p.img, p.content, p.author_id, u.username, u.profile_pic FROM helo_posts AS p 
JOIN helo_users AS u ON p.author_id = u.id
WHERE p.title LIKE ${%search%}