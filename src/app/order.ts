//DTO

export interface Order
{
    id: number;
    userId: number;
    productId:number;
    orderId:number;
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
}