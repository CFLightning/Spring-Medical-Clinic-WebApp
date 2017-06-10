export declare class Cookie {
    static checkIfExists(name: string): boolean;
    static get(name: string): string;
    static set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void;
    static delete(name: string, path?: string, domain?: string): void;
}
