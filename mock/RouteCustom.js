import routes from '../config/routes';

export default{
    'Get /api/getyroute':(req,res)=>{
        res.send({status:'ok',data:routes})
    }
}