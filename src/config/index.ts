export const PRODUCT_CATEGORIES = [
    {
      label: 'UI компоненты',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Выбор редакции',
          href: `/products?category=categ_1`,
          imageSrc: '',
        },
        {
          name: 'Новинки',
          href: '/products?category=categ_1&sort=desc',
          imageSrc: '',
        },
        {
          name: 'Популярное',
          href: '/products?category=categ_1',
          imageSrc: '',
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
          imageSrc: '/nav/icons/picks.jpg',
        },
        {
          name: 'Новинки',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Популярное',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
  ]
