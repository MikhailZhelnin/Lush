export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
    ],
};