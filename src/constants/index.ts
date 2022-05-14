const prefix = process.env.NODE_ENV === 'production' ? '/react-qiankun' : '';

export const qiankunApp = [
  {
    name: 'vue3-cnode',
    entry: 'https://guoqirong.github.io/vue3-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue3-cnode',
  },
  {
    name: 'umi-cnode',
    entry: 'https://guoqirong.github.io/umi-cnode/',
    container: '#container',
    activeRule: prefix + '/#/umi-cnode',
  },
  {
    name: 'react-cnode',
    entry: 'https://guoqirong.github.io/react-cnode/',
    container: '#container',
    activeRule: prefix + '/#/react-cnode',
  },
  {
    name: 'vue2-cnode',
    entry: 'https://guoqirong.github.io/vue2-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue2-cnode',
  },
  {
    name: 'vue-vite-cnode',
    entry: 'https://guoqirong.github.io/vue-vite-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue-vite-cnode',
  },
];