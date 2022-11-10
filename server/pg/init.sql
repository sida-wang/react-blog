CREATE DATABASE react-blog;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    slug TEXT,
    created_at TIMESTAMPTZ,
    modified_at TIMESTAMPTZ
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    title TEXT,
    meta_title TEXT,
    slug TEXT
);

CREATE TABLE post_tags(
    post_id INT REFERENCES posts,
    tag_id INT REFERENCES tags
);

