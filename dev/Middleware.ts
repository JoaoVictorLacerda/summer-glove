import {Service} from "../src/index";

@Service()
export default class Middleware {

    public authorizeUser(){
        console.log('test method')
    }
}