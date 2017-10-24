import { BaseEntity } from './../../shared';

export class Customer implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public telMain?: string,
        public address?: string,
        public orders?: BaseEntity[],
    ) {
    }
}
