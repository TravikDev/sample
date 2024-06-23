import { paths } from '../routes/paths';

import packageJson from '../../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
    site: {
        name: string;
        serverUrl: string;
        assetURL: string;
        basePath: string;
        version: string;
    };
    auth: {
        method: 'jwt' | 'amplify' | 'firebase' | 'supabase' | 'auth0';
        skip: boolean;
        redirectPath: string;
    };
    auth0: { clientId: string; domain: string; callbackUrl: string };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
    site: {
        name: 'Sample',
        serverUrl: import.meta.env.VITE_SERVER_URL ?? '',
        assetURL: import.meta.env.VITE_ASSET_URL ?? '',
        basePath: import.meta.env.VITE_BASE_PATH ?? '',
        version: packageJson.version,
    },
    /**
     * Auth
     * @method jwt | amplify | firebase | supabase | auth0
     */
    auth: {
        method: 'jwt',
        skip: false,
        redirectPath: paths.dashboard.root,
    },
    auth0: {
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID ?? '',
        domain: import.meta.env.VITE_AUTH0_DOMAIN ?? '',
        callbackUrl: import.meta.env.VITE_AUTH0_CALLBACK_URL ?? '',
    },
}