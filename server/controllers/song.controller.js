const database = require('../config/database')

exports.addFav = function(req, res) {
    const id = req.body.id
    const song = req.body.name
    const album = req.body.album
    const artist = req.body.artist
    const preview = req.body.preview
    if(!id || !song || !album || !artist || !preview){
        return res.status(400).json({
            message: "Please fill data!"
        })
    }else {
        const sqlCheck = "SELECT * FROM favorite WHERE user_id = ? AND (song_artist = ? AND song_name = ?)"
        database.query(sqlCheck,[id, artist, song], (err,result) => {
            console.log(result);
            if(result.length == 0){
                const sql = "INSERT INTO favorite (song_name, song_album, song_artist, song_preview, user_id) VALUES (?,?,?,?,?)"
                database.query(sql,[song, album, artist, preview, id], (err, result) => {
                    if(err){
                        throw err
                    }else{
                        return res.status(200).json({message:"Added song successfully!"})
                    }
                })
            }else {
                return res.status(400).json({message:"Already have this song!"})
            }
        })
    }
}
