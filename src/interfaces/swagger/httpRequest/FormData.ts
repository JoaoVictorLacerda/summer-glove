import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";
import {FormDataTypes} from "../../types/FormDataTypes";

export default function FormData(formData: { [key: string]: FormDataTypes }) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["formData"] = formData

    }
}