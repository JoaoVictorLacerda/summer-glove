import {ThemeInterface} from "../themes/ThemeInterface";
import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function Theme(theme: ThemeInterface) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().setTheme(theme);
    }
}