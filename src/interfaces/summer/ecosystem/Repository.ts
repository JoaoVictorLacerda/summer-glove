import DependenceInject from "../../../application/core/DependenceInject";

export default function Repository(className?: string) {

    return (target: any) => {
        const key = className || target.name.toUpperCase()
        DependenceInject.getInstance().getObjectConfig().objects[key] = new target();
    }
}
