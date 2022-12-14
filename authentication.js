const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if(!token){
        return res.status(401).json('A token is required for authentication')
    }
    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        if(req.originalUrl == '/api/parks/new'){
            if(!decoded.admin){
                return res.status(401).json('Invalid token')
            }
        }
        req.user = decoded
       
    }
    catch(err){
        return res.status(401).json('Invalid token')
    }
    return next()
}

module.exports =  verifyToken