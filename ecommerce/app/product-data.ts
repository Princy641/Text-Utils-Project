// Define the Product interface
export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

// Define the products array using the Product interface
export const products: Product[] = [
    {
        id: '123',
        name: 'Hat',
        imageUrl: 'hat.jpg',
        description: 'Cheer the team on in style with our unstructured, low crown hat.',
        price: 29,
    },
    {
        id: '234',
        name: 'Mug',
        imageUrl: 'mug.jpg',
        description: 'Enjoy your morning coffee or tea in the company of your team spirit.',
        price: 16,
    },
    {
        id: '345',
        name: 'Shirt',
        imageUrl: 'shirt.jpg',
        description: 'Our t-shirts are made from ring-spun, long-staple organic cotton.',
        price: 26,
    },
    {
        id: '456',
        name: 'Apron',
        imageUrl: 'apron.jpg',
        description: 'Everyone\'s a chef in our eco-friendly apron made from 55% hemp.',
        price: 24,
    },
];
