import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from 'payload/types'

const adminsAndUser: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true

    return {
        id: {
        equals: user.id,
        },
    }
}

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
        generateEmailHTML: ({ token }) => {
            return PrimaryActionEmailHtml({
                actionLabel: "Подтвердите ваш аккаунт",
                buttonText: "Подтвердить учетную запись",
                href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
            })
        },
        },
    },
    access: {
        read: adminsAndUser,
        create: () => true,
        update: ({ req }) => req.user.role === 'admin',
        delete: ({ req }) => req.user.role === 'admin',
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
        defaultColumns: ['id'],
    },
    fields: [
        {
            name: 'products',
            label: 'Товары',
            admin: {
                condition: () => false,
            },
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
        },
        {
            name: 'product_files',
            label: 'Файлы',
            admin: {
                condition: () => false,
            },
            type: 'relationship',
            relationTo: 'product_files',
            hasMany: true,
        },
        {
            name: 'role',
            defaultValue: 'user',
            required: true,

            type: 'select',
            options: [
                { label: 'Админ', value: 'admin' },
                { label: 'Пользователь', value: 'user' },
            ],
        },
    ],
}
