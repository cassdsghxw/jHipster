import { BaseEntity } from './../../shared';

export class Order implements BaseEntity {
    constructor(
        public id?: number,
        public orderAmount?: number,
        public orderDate?: any,
        public noOfItems?: number,
        public paymentMode?: string,
        public orderRemarks?: string,
        public customer?: BaseEntity,
    ) {
    }
}
