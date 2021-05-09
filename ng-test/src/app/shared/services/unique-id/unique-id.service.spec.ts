import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {


    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
        should return the number of generatedIds when called`, () => {
        for (let i = 0; i < 50; i++) {
            service.generateUniqueIdWithPrefix('app')
        };

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(50);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix("app");

        expect(id.startsWith('app-')).toBeTrue()
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should not generate duplicated IDs when called multiple times`, () => {
        const ids = new Set();

        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'))
        };

        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should thrown when called with emp(ty`, () => {
        const emptyValues = [null, undefined, '', '0', '1'];

        emptyValues.forEach(
            emptyValue => {
                expect(() => service.generateUniqueIdWithPrefix(emptyValue))
                .withContext(`Empty Value: ${emptyValue}`)
                .toThrow();
            }
        );
    });
});