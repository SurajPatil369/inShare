const router = require('express').Router();
const File= require('../models/file');



router.get('/:uuid',async (req,res)=>{
    try {
        const file=await File.findOne({uuid: req.params.uuid});
        if (!file) {
            return res.render('download',{error:'link has been expired'});
        }
        return res.render('download',{
            uuid: file.uuid,
            fileName:file.filename,
            fileSize:file.size,
            downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
           //http://localhost:8000/files/download/lskdsjl-sdjsld-fjlskd
        })
    } catch (error) {
        return res.render('download',{error:'something went wrong'});
    }
});
module.exports = router;
