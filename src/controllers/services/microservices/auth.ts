import {Request, Response, NextFunction} from "express";

export const auth = (req: Request, res: Response, next:NextFunction) => {
    try{
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect("/");
        }
    }catch(err){
        console.log(err);
    }
};
