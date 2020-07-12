CREATE TABLE if not exists helo_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password TEXT,
    profile_pic TEXT
)

CREATE TABLE if not exists helo_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    img TEXT,
    content TEXT,
    author_id INT references helo_users(id)


);