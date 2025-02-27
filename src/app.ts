 import express, { Request, Response, NextFunction } from "express";

 const app = express();

 app.get("/", (req, res)=>{
    res.send("Hello World");
 })
 app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
 })
 app.use(express.json())

 app.post("/api/product", (req, res)=>{
    console.log(req.body);
    res.send("Product created");
 })

 app.all("/api/product/check", (req: any, res: any) => {
    if (req.method === "GET"){
        return res.send("GET Activated");
    }
    else if (req.method === "POST"){
        return res.send("POST Activated");
    }
    else {
        return res.send("Method not allowed");
    }
 })

 app.get("/api/interfaces", (req: Request, res: Response) => {

 })

 function auth(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1"){
        next();
    }else{
        res.status(401);
        res.json({msg: "Unauthorized"});
    }
 } 

 app.get("/api/user/:id/access", auth, (req: Request, res: Response) => {
    return res.json({msg: "Authorized"});
 })