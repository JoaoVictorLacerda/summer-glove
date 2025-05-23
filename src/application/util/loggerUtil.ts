import LoggerInformationCore from "../core/LoggerInformationCore";

export function printDebug(message: string): void {

    canShowLogAndCallback(message, "level: DEBUG", console.log)

}

export function printInfo(message: string): void {

    canShowLogAndCallback(message, "level: INFO", console.log)

}

export function printError(message: string, error: unknown): void {

    canShowLogAndCallback(message, "level: ERROR", console.error, error)

}


export function printWarn(message: string): void {

    canShowLogAndCallback(message, "level: WARN", console.log)
}

function canShowLogAndCallback(message: string, level: string, callback: any, error: any = undefined) {
    if (error) {
        LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push(callback(message, error, level))
    } else {
        LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push(callback(message, level))
    }
}