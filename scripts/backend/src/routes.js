import { Router } from "express";

const routes = Router();

routes.get("/",(req,res)=>{
  res.send("Routes ok")
})

export default routes;
