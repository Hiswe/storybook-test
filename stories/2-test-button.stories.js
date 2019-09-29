import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from 'storybook-addon-vue-info';

import StoryButton from './test-button.vue';

export default {
    title: 'Ui/Story button',
};

export const text = () => ({
    components: { StoryButton },
    template: '<story-button @click="action">Hello Button</story-button>',
    methods: { action: action('clicked') },
    propsDescription: {},
});

// export const jsx = () => ({
//     components: { StoryButton },
//     render(h) {
//         return <story-button onClick={this.action}>With JSX</story-button>;
//     },
//     methods: { action: linkTo('clicked') },
// });

export const emoji = () => ({
    components: { StoryButton },
    template: '<story-button @click="action" disabled>😀 😎 👍 💯</story-button>',
    methods: { action: action('clicked') },
});
