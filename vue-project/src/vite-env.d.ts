/// <reference types="vite/client" />
declare module '*.vue' {
  import {defineComponent} from 'vue';
  export default defineComponent;
}

interface ImportMetaEnv {
  readonly VITE_APP_CONFIG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}