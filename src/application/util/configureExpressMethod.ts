export default function configureExpressMethod(endpoint: string, target: any, descriptor: PropertyDescriptor, callback: any, ...middleware: any) {
    const constructorName = target.constructor.name
    const functionValue = descriptor.value
    callback(endpoint, constructorName, functionValue, middleware)
}