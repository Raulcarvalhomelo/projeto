export default class Pessoa {
    constructor(readonly nome: string, readonly email: string) {}

    get emailMask(): string {
        const regex = /(.{1,3})(.*)(@.*)/;
        return this.email.replace(regex, (_, p1, p2, p3) => p1 + "*".repeat(p2.length) + p3);
    }
    toString(): string {
        return `Pessoa: ${this.nome} - <${this.emailMask}> `;
    }

}

