export default function StartControllers(...controllers: any) {

    return (target: any) => {
        if(controllers){
            controllers.forEach((item: any)=> new item())
        }
    }
}
