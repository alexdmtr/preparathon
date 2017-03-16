var User = require('../models').models.user

// add endpoint for POST on api/users
exports.postUsers = function(req, res) {
    // res.status(501).send()

    let user = req.body

    User
        .create(user)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            throw err
            res.send(err)
        })
}

// add endpoint for PUT on api/users/{userId}
exports.putUser = function(req, res) {
    let userId = req.params.userId

    let user = req.body
    User
        .update(user, { where: { id: userId}, returning: true })
        .then(function(result) {
            res.status(200).json(result[1][0])
        })
        .catch(function(err) {
            throw err

            res.send(err)
        })
}

// add endpoint for DELETE on api/users/{userId}
exports.deleteUser = function(req, res) {
    let userId = req.params.userId

    User
        .destroy({
            where: {
                id: userId
            }
        })
        .then(function(result) {
            res.status(200).json({message: 'User deleted succesfuly'})
        })
        .catch(function(err) {
            throw err

            res.end(err)
        })
}

// add endpoint for GET on api/users/{userId}
exports.getUser = function(req, res) {
    let userId = req.params.userId


    User
        .findById(userId)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(404).send(err)
        })
}