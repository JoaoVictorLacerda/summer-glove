import {Service} from "../src/index";

@Service()
export default class Middleware {

    constructor(aaa:string) {
    }
    public authorizeUser(){
        console.log('test method')
    }
}