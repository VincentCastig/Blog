module.exports = {
    post_article: (req,res) => {
        const db = req.app.get('db');
        const { id, title, content } = req.body;

        db.post_article(id, title, content).then(() => res.status('200').send()).catch(() => rest.status.send('404'));
    }
}