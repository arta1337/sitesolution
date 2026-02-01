import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Posts',
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
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title.pt',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo',
            type: 'object',
            fields: [
                { name: 'pt', type: 'text', title: 'Português', rows: 3 },
                { name: 'en', type: 'text', title: 'English', rows: 3 },
            ],
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                },
            ],
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'content',
            title: 'Conteúdo',
            type: 'object',
            fields: [
                {
                    name: 'pt',
                    type: 'array',
                    title: 'Português',
                    of: [
                        { type: 'block' },
                        {
                            type: 'image',
                            options: { hotspot: true },
                            fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
                        },
                    ],
                },
                {
                    name: 'en',
                    type: 'array',
                    title: 'English',
                    of: [
                        { type: 'block' },
                        {
                            type: 'image',
                            options: { hotspot: true },
                            fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'datetime',
        }),
        defineField({
            name: 'featured',
            title: 'Destaque',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'readTime',
            title: 'Tempo de Leitura (minutos)',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'title.pt',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `por ${author}` }
        },
    },
    orderings: [
        {
            title: 'Data de Publicação',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
})
