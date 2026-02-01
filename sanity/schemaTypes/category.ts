import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Categorias',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'object',
            fields: [
                { name: 'pt', type: 'string', title: 'Português' },
                { name: 'en', type: 'string', title: 'English' },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title.pt',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'object',
            fields: [
                { name: 'pt', type: 'text', title: 'Português', rows: 2 },
                { name: 'en', type: 'text', title: 'English', rows: 2 },
            ],
        }),
        defineField({
            name: 'color',
            title: 'Cor',
            type: 'string',
            options: {
                list: [
                    { title: 'Azul', value: 'blue' },
                    { title: 'Verde', value: 'green' },
                    { title: 'Roxo', value: 'purple' },
                    { title: 'Laranja', value: 'orange' },
                    { title: 'Rosa', value: 'pink' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'title.pt',
        },
    },
})
