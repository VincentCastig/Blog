module.exports = {
    post_article: (req,res) => {
        const db = req.app.get('db');
        const { title, content } = req.body;

        db.post_article(title, content).then(() => res.status('200').send()).catch(() => rest.status.send('404'));
    },

    get_all_articles: (req,res) => {
        const db = req.app.get('db');
        const { title, content } = req.body;

        db.get_all_articles().then(() => res.status('200').send()).catch(() => rest.status.send('404'));
    }
}