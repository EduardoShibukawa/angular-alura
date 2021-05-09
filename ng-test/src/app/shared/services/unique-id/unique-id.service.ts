import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid'

@Injectable()
export class UniqueIdService {
    
    private numberOfGeneratedsIds = 0;
    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix || !this.validId.test(prefix)) {
            throw Error('Prefix can not be empty!')
        }
        
        const uniqueId = this.generateUniqueId();

        this.numberOfGeneratedsIds++;

        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedsIds;
    }

    private generateUniqueId(): string {
        return uuidV4();
    }
}