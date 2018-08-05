\c proj_dev

DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) UNIQUE NOT NULL,
    password_digest VARCHAR (255)
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT,
    username VARCHAR (255) REFERENCES users (name),
    user_id INTEGER REFERENCES users (id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
