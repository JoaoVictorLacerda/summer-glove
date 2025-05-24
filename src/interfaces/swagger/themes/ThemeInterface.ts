export abstract class ThemeInterface {
    DEFAULT_CSS_PATH = "dist/interfaces/swagger/themes/css"

    abstract getCss(): any;
    abstract css(): string;
}