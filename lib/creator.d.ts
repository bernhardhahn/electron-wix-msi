export interface MSICreatorOptions {
    appDirectory: string;
    appUserModelId?: string;
    description: string;
    exe: string;
    extensions?: Array<string>;
    cultures?: string;
    language?: number;
    manufacturer: string;
    name: string;
    innerAppName: string;
    outputDirectory: string;
    programFilesFolderName?: string;
    shortName?: string;
    shortcutFolderName?: string;
    shortcutName?: string;
    shortcutArguments?: string;
    ui?: UIOptions | boolean;
    upgradeCode?: string;
    version: string;
    signWithParams?: string;
    certificateFile?: string;
    certificatePassword?: string;
    arch?: 'x64' | 'ia64' | 'x86';
}
export interface UIOptions {
    chooseDirectory?: boolean;
    template?: string;
    images?: UIImages;
}
export interface UIImages {
    background?: string;
    banner?: string;
    exclamationIcon?: string;
    infoIcon?: string;
    newIcon?: string;
    upIcon?: string;
}
export declare class MSICreator {
    componentTemplate: string;
    componentRefTemplate: string;
    directoryTemplate: string;
    wixTemplate: string;
    uiTemplate: string;
    uiDirTemplate: string;
    propertyTemplate: string;
    wxsFile: string;
    appDirectory: string;
    appUserModelId: string;
    description: string;
    exe: string;
    extensions: Array<string>;
    cultures?: string;
    language: number;
    manufacturer: string;
    name: string;
    innerAppName: string;
    outputDirectory: string;
    programFilesFolderName: string;
    shortName: string;
    shortcutFolderName: string;
    shortcutName: string;
    shortcutArguments: string;
    upgradeCode: string;
    version: string;
    certificateFile?: string;
    certificatePassword?: string;
    signWithParams?: string;
    arch: 'x64' | 'ia64' | 'x86';
    ui: UIOptions | boolean;
    private files;
    private directories;
    private tree;
    private components;
    constructor(options: MSICreatorOptions);
    create(): Promise<{
        wxsFile: string;
        wxsContent: string;
    }>;
    compile(): Promise<{
        wixobjFile: string;
        msiFile: string;
    }>;
    private createWxs;
    private createWixobj;
    private createMsi;
    private createFire;
    private signMSI;
    private getUI;
    private getUIProperties;
    private getDirectoryForTree;
    private getTree;
    private getComponentRefs;
    private getComponent;
    private getComponentId;
}
