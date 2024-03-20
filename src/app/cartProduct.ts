//DTO

export interface CartProduct
{
    id: number;
    userId: number;
    productId:number;
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
}