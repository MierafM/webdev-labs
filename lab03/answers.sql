-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url 
FROM posts 
WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id 
FROM posts 
WHERE user_id=26 OR user_id=12;



-- Exercise 6
SELECT COUNT(posts) 
FROM posts;



-- Exercise 7
SELECT user_id, COUNT(user_id) 
FROM comments 
GROUP BY user_id 
ORDER BY COUNT(user_id) DESC;




-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name 
FROM posts JOIN users ON users.id=posts.user_id 
WHERE user_id=26 OR user_id=12;




-- Exercise 9
SELECT p.id, p.pub_date, f.following_id 
FROM posts p JOIN following f ON p.user_id=f.following_id 
WHERE f.user_id=26;



-- Exercise 10
SELECT p.id, p.pub_date, f.following_id, u.username 
FROM posts p JOIN following f ON p.user_id=f.following_id JOIN users u ON p.user_id=u.id 
WHERE f.user_id=26 ORDER BY p.pub_date DESC;



-- Exercise 11
INSERT INTO bookmarks (user_id, post_id) VALUES (26, 219);
INSERT INTO bookmarks (user_id, post_id) VALUES (26, 220);
INSERT INTO bookmarks (user_id, post_id) VALUES (26, 221);



-- Exercise 12
DELETE FROM bookmarks WHERE user_id=26 AND post_id=219;
DELETE FROM bookmarks WHERE user_id=26 AND post_id=220;
DELETE FROM bookmarks WHERE user_id=26 AND post_id=221;


-- Exercise 13
UPDATE users SET email='cyoung2022@gmail.com' WHERE users.id=26;



-- Exercise 14
SELECT p.id, p.user_id, COUNT (c.post_id), p.caption FROM posts p JOIN comments c ON p.id=c.post_id WHERE p.user_id=26 GROUP BY(p.id);
