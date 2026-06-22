import makeBodyDoc from "./makeBodyDoc";
import makeParamsDoc from "./makeParamsDoc";
import makeFormDataDoc from "./makeFormDataDoc";
import makeQueryDoc from "./makeQueryDoc";
import makeHeaderDoc from "./makeHeaderDoc";
import makeFormDataV2Doc from "./makeFormDataV2Doc";


export default function buildObjectPath(
    security: any,
    controllerName: string,
    status: string[],
    controller: any,
    endpointString: string
): any {

    const securityResult = setSecurity(controller, security);
    const body: any = isBody(controller)
    const param: any = isParamPath(controller);
    const form: any = isFormData(controller, endpointString);
    const query: any = isQuery(controller);
    const header: any = isHeader(controller);
    return {
        security: securityResult,
        tags: [
            controllerName
        ],
        parameters: (
            body.parameters || [])
            .concat(
                param.parameters || [],
                form.parameters || [],
                query.parameters || [],
                header.parameters || []
            ),
        responses: {
            ...status
        }
    };
}

function isHeader(controller: any) {
    let queryResult = {}
    if (controller.header) {
        queryResult = makeHeaderDoc(controller.header);
    }
    return queryResult;
}

function isQuery(controller: any) {
    let queryResult = {}
    if (controller.query) {
        queryResult = makeQueryDoc(controller.query);
    }
    return queryResult;
}

function isParamPath(controller: any) {
    let paramResult = {}
    if (controller.paramPath) {
        paramResult = makeParamsDoc(controller.paramPath);
    }
    return paramResult;
}

function isFormData(controller: any, endpointString: string) {
    let formDataResult = {}
    let isToLogWarning = false;
    if (controller.formData) {
        formDataResult = makeFormDataDoc(controller.formData);
        isToLogWarning=true;
    }
    if(controller.formDataV2){
        if(isToLogWarning){
            console.log(`WARN: There are two versions of formData mappings for the same endpoint. endpoint: ${endpointString}`,"level: WARN")
        }
        formDataResult = makeFormDataV2Doc(controller.formDataV2);
    }
    return formDataResult;
}

function isBody(controller: any) {
    let docRequest = {};
    if (controller.body) {
        docRequest = makeBodyDoc(controller.body)
    }
    return docRequest
}

function setSecurity(controller: any, security: any) {

    let securityResult: any = [];
    if (controller.security > 0) {
        securityResult = [
            security
        ]
    }
    return securityResult;
}
