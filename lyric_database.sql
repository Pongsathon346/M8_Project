CREATE TABLE favorite (
  id INT PRIMARY KEY,
  image VARCHAR NOT NULL,
  song_name VARCHAR NOT NULL,
  song_album VARCHAR NOT NULL,
  song_artist VARCHAR NOT NULL,
  song_preview VARCHAR NOT NULL,
  user_id INT NOT NULL
);

CREATE TABLE users (
  user_id INT primary KEY,
  user_name VARCHAR NOT NULL,
  user_password VARCHAR NOT NULL,
  user_email VARCHAR NOT NULL
);
