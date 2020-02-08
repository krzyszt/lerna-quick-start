import { ajax } from 'rxjs/ajax';

import { Credentials } from '../../store/types';

interface AjaxConfig {
    url?: string,
    method?: string,
    body?: Object,
    headers: Object,
}

const loginURL = '';
const getAjaxConfig = (): AjaxConfig => ({
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login$ = (credentials: Credentials) => {
    const ajaxConfig = getAjaxConfig();
    ajaxConfig.url = loginURL;
    ajaxConfig.method = 'POST';
    ajaxConfig.body = credentials;
    return ajax(ajaxConfig);
};