declare global {
    interface String {
        toSnakeCase(): string;
        toCamelCase(): string;
        toPascalCase(): string;
        toKebabCase(): string;
    }
}

String.prototype.toSnakeCase = function (): string {
    return this.replace(/([A-Z])/g, '_$1')
        .replace(/\s+/g, '_')
        .toLowerCase()
        .replace(/^_/, '');
};

String.prototype.toCamelCase = function (): string {
    return this.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')).replace(/^./, (s) =>
        s.toLowerCase()
    );
};

String.prototype.toPascalCase = function (): string {
    return this.toCamelCase().replace(/^./, (s) => s.toUpperCase());
};

String.prototype.toKebabCase = function (): string {
    return this.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};

export {};
