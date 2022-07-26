import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.send('Home no Controller')

}

export const dogs = (req: Request, res: Response)=>{
    res.send('Dogs no Controller')

}

export const cats = (req: Request, res: Response)=>{
    res.send('Cats no Controller')

}

export const fishes = (req: Request, res: Response)=>{
    res.send('Fishes no Controller')

}