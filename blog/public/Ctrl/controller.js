module.exports = {
    post_article: (req,res) => {
        const db = req.app.get('db');
        const { title, category, content } = req.body.params;
        console.log(req.body);
        db.post_article(title, category, content).then((response) => res.status('200').send(response)).catch(() => rest.status.send('404'));
    },

    get_all_articles: (req,res) => {
        const db = req.app.get('db');
        console.log(req.body);
        db.get_all_articles().then((data) => res.status('200').send(data)).catch(() => rest.status.send('404'));
    }
}