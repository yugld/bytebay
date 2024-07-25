export const PRODUCT_CATEGORIES = [
    {
      label: 'UI Kits',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Выбор редакции',
          href: `/products?category=categ_1`,
          imageSrc: '/nav/ui/4.jpg',
        },
        {
          name: 'Новинки',
          href: '/products?category=categ_1&sort=desc',
          imageSrc: '/nav/ui/yellow.jpg',
        },
        {
          name: 'Популярное',
          href: '/products?category=categ_1',
          imageSrc: '/nav/ui/blue.jpg',
        },
      ],
    },
    {
      label: 'Иконки',
      value: 'icons' as const,
      featured: [
        {
          name: 'Выбор редакции',
          href: `/products?category=icons`,
          imageSrc: '/nav/icons/3.jpg',
        },
        {
          name: 'Новинки',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/orange.jpg',
        },
        {
          name: 'Популярное',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/1.jpg',
        },
      ],
    },
  ]
