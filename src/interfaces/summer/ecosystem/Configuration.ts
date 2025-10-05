import DependenceInject from "../../../application/core/DependenceInject";

export default function Configuration(className?: string) {

    return (target: any) => {
        const key = className || target.name.toUpperCase()
        DependenceInject.getInstance().getObjectConfig().objects[key] = new target();
    }
}
