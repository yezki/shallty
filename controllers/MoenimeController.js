const Browser = require('../services/Browser')
const Moenime = new (require('../services/Moenime'))(Browser)

class MoenimeController {
    async animeList(req, res) {
        const type = (['ongoing', 'movie'].includes(req.query.link)) ? type : 'all'
        const anime = await Moenime.animeList(type)
        if (anime.error) {
            res.status(500).json({
                status: 500,
                message: anime.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: anime
            })
        }
    }

    async episodes(req, res) {
        const episodes = await Moenime.episodes(req.query.link)
        if (episodes.error) {
            res.status(500).json({
                status: 500,
                message: episodes.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: episodes
            })
        }
    }

    async completedEpisodes(req, res) {
        const episodes = await Moenime.completedEpisodes(req.query.link)
        if (episodes.error) {
            res.status(500).json({
                status: 500,
                message: episodes.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: episodes
            })
        }
    }

    async newReleases(req, res) {
        const anime = await Moenime.newReleases()
        if (anime.error) {
            res.status(500).json({
                status: 500,
                message: anime.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: anime
            })
        }
    }

    async teknoku(req, res) {
        const url = await Moenime.teknoku(req.query.link)
        if (url.error) {
            res.status(500).json({
                status: 500,
                message: url.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: url
            })
        }
    }
}

module.exports = new MoenimeController