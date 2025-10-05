import Core from "./Core";

export default class DependenceInject implements Core {
    private constructor() {
    }

    private static instance: DependenceInject;

    public static getInstance() {

        if (!DependenceInject.instance) {
            DependenceInject.instance = new DependenceInject();
        }
        return DependenceInject.instance;
    }

    private objects: any = {}

    public getObjectConfig(): any {
        return {
            objects: this.objects,
        };
    }

    cleanObjects(): void {
        this.objects = {}
    }

}