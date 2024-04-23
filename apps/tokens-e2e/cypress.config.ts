import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run tokens:serve:development',
        production: 'nx run tokens:serve:production',
      },
      ciWebServerCommand: 'nx run tokens:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
