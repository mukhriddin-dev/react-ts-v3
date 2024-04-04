import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement:'/src/components'},
      { find: '@containers', replacement:'/src/components/containers'},
      { find: '@ui', replacement:'/src/components/ui'},
      { find: '@form-ui', replacement:'/src/components/ui/form'},
      { find: '@images', replacement:'/src/assets/images'},
      { find: '@utils', replacement:'/src/utils'},
      { find: '@hooks', replacement:'/src/hooks'},
      { find: '@pages', replacement:'/src/pages/index.tsx'},
      { find: '@context', replacement:'/src/context'},
      { find: '@service', replacement:'/src/service'},
      { find: '@types', replacement:'/src/types'},
      { find: '@interface', replacement:'/src/types/interface'},
      { find: '@enums', replacement:'/src/types/enums'},
      { find: '@assets', replacement:'/src/assets'},
      { find: '@hooks', replacement:'/src/hooks'},
    ]
  }
})
