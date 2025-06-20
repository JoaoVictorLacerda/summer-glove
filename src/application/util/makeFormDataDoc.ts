export default function makeFormDataDoc(params: any) {
    const parameters: any = {
        parameters: []
    }
    Object.keys(params).forEach((key: any) => {
        const paramPath = {
            "name": key,
            "in": "formData",
            "type": params[key]
        }
        parameters.parameters.push(paramPath);
    })
    return parameters;
}