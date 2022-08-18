import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'gallery',
        path: 'gallery',
        component: () => import('pages/GalleryPage.vue'),
        redirect: { name: 'graphic-design' },
        children: [
          {
            name: 'graphic-design',
            path: 'graphic-design',
            component: () => import('pages/GalleryPage.vue'),
            children: [
              {
                name: 'branding',
                path: 'branding',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'editorial',
                path: 'editorial',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'event',
                path: 'event',
                component: () => import('pages/GalleryPage.vue'),
              },
            ],
          },
          {
            name: 'photography',
            path: 'photography',
            component: () => import('pages/GalleryPage.vue'),
            children: [
              {
                name: 'abstract',
                path: 'abstract',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'photo-fine-art',
                path: 'photo-fine-art',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'nature',
                path: 'nature',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'portrait',
                path: 'portrait',
                component: () => import('pages/GalleryPage.vue'),
              },
            ],
          },
          {
            name: 'fine-art',
            path: 'fine-art',
            component: () => import('pages/GalleryPage.vue'),
            children: [
              {
                name: 'digital',
                path: 'digital',
                component: () => import('pages/GalleryPage.vue'),
              },
              {
                name: 'analog',
                path: 'analog',
                component: () => import('pages/GalleryPage.vue'),
              },
            ],
          },
          {
            name: 'gallery-tag',
            path: 'tag/:tagName',
            component: () => import('pages/GalleryPage.vue'),
          },
        ],
      },
      { path: 'about', redirect: { name: 'home' } },
      { path: 'contact', redirect: { name: 'home' } },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
