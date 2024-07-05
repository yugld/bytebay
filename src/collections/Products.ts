import { PRODUCT_CATEGORIES } from '../config'
import { CollectionConfig } from 'payload/types'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false,
            },
        },
        {
            name: 'name',
            label: 'Название',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Описание',
        },
        {
            name: 'price',
            label: 'Стоимость в USD',
            min: 0,
            max: 1000,
            type: 'number',
            required: true,
        },
        {
            name: 'category',
            label: 'Категория',
            type: 'select',
            options: PRODUCT_CATEGORIES.map(
                ({ label, value }) => ({ label, value })
            ),
            required: true,
        },
        {
            name: 'product_files',
            label: 'Файлы товара',
            type: 'relationship',
            required: true,
            relationTo: 'product_files',
            hasMany: false,
        },
        {
            name: 'approvedForSale',
            label: 'Статус',
            type: 'select',
            defaultValue: 'pending',
            access: {},
            options: [
                {
                    label: 'На проверке',
                    value: 'pending',
                },
                {
                    label: 'Одобрен',
                    value: 'approved',
                },
                {
                    label: 'Отклонен',
                    value: 'denied',
                },
            ],
        },
        {
            name: 'priceId',
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: 'stripeId',
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Изображения товара',
            minRows: 1,
            maxRows: 4,
            required: true,
            labels: {
                singular: 'Изображение',
                plural: 'Изображения',
            },
            fields: [
                {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
                },
            ],
        },
    ],
}
