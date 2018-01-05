INSERT INTO articles(title, date, content) VALUES($1, date, $2)
RETURNING *