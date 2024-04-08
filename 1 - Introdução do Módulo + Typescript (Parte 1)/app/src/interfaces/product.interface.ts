export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    created_at: Date;
    update_at?: Date;
}

export interface IProductCreateData {
    name: string;
    price: number;
    description: string;
}

export interface IProductUpdateData{
    name?: string;
    price?: number;
    description?: string;
}