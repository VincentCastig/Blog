INSERT INTO articles(title, content) VALUES($1, $2)
RETURNING *