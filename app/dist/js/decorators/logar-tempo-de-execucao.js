export function logarTempoDeExecucao() {
    return function (target, propertykey, descriptor) {
        const methodOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = methodOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t2 - t1) / 1000} segundos.`);
            retorno;
        };
        return descriptor;
    };
}
