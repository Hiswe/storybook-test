import { configure, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults as setVueInfoDefault } from 'storybook-addon-vue-info';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

setVueInfoDefault({
    header: false,
});
addDecorator(withInfo);
