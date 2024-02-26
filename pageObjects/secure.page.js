import { $ } from '@wdio/globals';

   async function  getFlashAlert() {
        return await $('#flash');
    }

export default getFlashAlert;