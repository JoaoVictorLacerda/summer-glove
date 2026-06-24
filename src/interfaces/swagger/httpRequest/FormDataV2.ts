import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";
import {FormDataTypes} from "../../types/FormDataTypes";

export default function FormDataV2(
    formData: {
        [key: string]:{
            type: FormDataTypes,
            example?: any
    }}){

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["formDataV2"] = formData

    }
}