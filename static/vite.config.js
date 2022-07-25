import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/


export default ((mode) => {
  console.log(mode);
  // 根据mode获取环境变量
  const env=loadEnv(mode, process.cwd());
  console.log(env); 
  return defineConfig({
    plugins: [vue()]
  })
})