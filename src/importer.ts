import { App } from "vue";

interface importPattern {
    files: Record<string, any>;
    prefix: string;
}

export function AutoComponent(patterns: importPattern[]) {
    return {
        install(app: App) {
            for (const pattern of patterns) {
                Object.entries(pattern.files).forEach(([path, c]) => {
                    const com = (c as any)?.default || c as any;
                    const name = path.replace(/^.*[\\/]/, "").replace(".vue", "")
                    if (com && name != ""){
                        app.component(pattern.prefix + name, com);
                    } 
                });
            }
        },
    };
}
