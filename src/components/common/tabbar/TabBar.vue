<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "tabbar",
};
</script>
<style>
#tab-bar {
    display: flex;
    /* width: 100%; */
    background-color: #f4f4f4;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(246, 246, 246, 0.2);
}
</style>