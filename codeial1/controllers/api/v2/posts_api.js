module.exports.index = function(req, res) {
    return res.json(200, {
        message: "There are creating API Web for testing",
        posts: []
    })
}