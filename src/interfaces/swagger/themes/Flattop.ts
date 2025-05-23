import {ThemeInterface} from "./ThemeInterface";
import {readFileSync} from "fs";

export default class Flattop extends ThemeInterface {
    private theme = readFileSync(this.DEFAULT_CSS_PATH + "/theme-flattop.css", "utf-8");

    getCss(): any {
        return {
            customCss: this.theme,
        };
    }

}

