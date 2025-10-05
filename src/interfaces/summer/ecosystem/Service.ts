import DependenceInject from "../../../application/core/DependenceInject";

export default function Service(className?: string) {

    return (target: any) => {
        const key = className || target.name
        DependenceInject.getInstance().getObjectConfig().objects[key.toUpperCase()] = new target();
    }
}
