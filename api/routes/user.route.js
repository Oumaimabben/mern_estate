import express  from "express";

const router = express.Router();
//GET
//UPDATE
//DELETE
router.get('/',(req,res)=>{
    res.json({
        message: "coucou",
    });
}
);

export  default router;