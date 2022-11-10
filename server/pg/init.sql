CREATE DATABASE react-blog;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL, 
    content TEXT,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL,
    modified_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    meta_title TEXT,
    slug TEXT NOT NULL UNIQUE
);

CREATE TABLE post_tags(
    post_id INT REFERENCES posts,
    tag_id INT REFERENCES tags
);

