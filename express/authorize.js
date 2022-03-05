// dummy authorization ( not realtime)
const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user === 'Luka'){
        req.user = {
            id: 1618,
            name: 'Luka'
        }
    }else{
        res.status(401).send('Unauthorize')
    }
    
    console.log('Authorize');
    next()
}

module.exports = authorize