export default {
    name: 'blogs',
    title: 'Blogs',
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
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'created',
            title: 'Created',
            type: 'date',
        },
    ],
};