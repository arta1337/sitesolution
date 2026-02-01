import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Autores',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Biografia',
            type: 'object',
            fields: [
                { name: 'pt', type: 'text', title: 'Português', rows: 3 },
                { name: 'en', type: 'text', title: 'English', rows: 3 },
            ],
        }),
        defineField({
            name: 'role',
            title: 'Cargo',
            type: 'object',
            fields: [
                { name: 'pt', type: 'string', title: 'Português' },
                { name: 'en', type: 'string', title: 'English' },
            ],
        }),
        defineField({
            name: 'social',
            title: 'Redes Sociais',
            type: 'object',
            fields: [
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'twitter', type: 'url', title: 'Twitter/X' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'role.pt',
        },
    },
})
