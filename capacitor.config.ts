import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gpt-desing',
  webDir: 'dist/gpt-desing',
  server: {
    androidScheme: 'https'
  }
};

export default config;
