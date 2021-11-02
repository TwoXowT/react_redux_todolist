const jwt = require('jsonwebtoken')
const JWT_SECRET = 'twoxowt'

module.exports = (req, res, next)=>{
    if(req.method === 'OPTIONS'){
        return next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            res.status(401).json({message: 'No authorized'})
        }

        const decoded = jwt.verify(token,JWT_SECRET)
        req.user = decoded
        next()
    }catch(e){
        res.status(401).json({message: 'No authorized'})
    }
}
