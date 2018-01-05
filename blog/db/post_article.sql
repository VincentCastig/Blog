INSERT INTO article(id, title, date, content) VALUES($1, $2, null, $3)
RETURNING *