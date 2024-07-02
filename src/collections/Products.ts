import { PRODUCT_CATEGORIES } from '../../config'
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
        label: 'Файлы товаров',
        type: 'relationship',
        required: true,
        relationTo: 'product_files',
        hasMany: false,
        },
    ],
}
