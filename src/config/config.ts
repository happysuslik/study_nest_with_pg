import {resolve} from "path";

export const CONFIG = {
    templates: {
        path: resolve(__dirname, '..', '..', 'views'),
    },
    public: {
        path: resolve(__dirname, '..', '..', 'public'),
    },
};


