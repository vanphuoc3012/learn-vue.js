/// <reference types="vite/client" />
declare module '*.vue' {
  import {defineComponent} from 'vue';
  export default defineComponent;
}

interface ImportMetaEnv {
  readonly VITE_API_CLIENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}