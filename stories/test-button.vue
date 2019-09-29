<script>
export default {
    name: `story-button`,
    props: {
        disabled: { type: Boolean, default: false },
        type: { type: String, default: `` },
    },
};
</script>

<template>
    <button class="story-button" :disabled="disabled" @click="$emit(`click`, $event)">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.story-button {
    background: none;
    border: 2px solid mediumvioletred;
    padding: 0.5rem 1rem;
    font-size: 1rem;

    &[disabled] {
        filter: grayscale(1);
    }
}
</style>
