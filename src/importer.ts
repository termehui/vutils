import { App } from "vue";

export interface AutoComPattern {
    files: Record<string, any>;
    prefix: string;
}

export function AutoComponent(patterns: AutoComPattern[]) {
    return {
        install(app: App) {
            for (const pattern of patterns) {
                Object.entries(pattern.files).forEach(([path, com]) => {
                    let name = path.replace(/^.*[\\/]/, "");
                    name = name.replace(".vue", "");
                    if (name != "") {
                        app.component("I" + name, com);
                    }
                });
            }
        },
    };
}
