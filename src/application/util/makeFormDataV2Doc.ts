export default function makeFormDataV2Doc(params: any) {
    const parameters: any = {
        parameters: []
    }

    Object.keys(params).forEach((key: any) => {

        const formData = params[key];

        const paramPath = {
            "name": key,
            "default": formData.example,
            // "example": formData.example,
            "in": "formData",
            "type": formData.type,
        }
        parameters.parameters.push(paramPath);
    })
    return parameters;
}