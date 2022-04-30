<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "#ff5777",
        },
    },
    data() {
        return {};
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path);
            // 根据路由来做颜色更改
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {};
        },
    },
    methods: {
        itemClick() {
            this.$router.push(this.path);
        },
    },
};
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img {
    width: 24px;
    vertical-align: middle;
    /* 去除img底部3像素 */
    margin: 3px 0 2px 0;
}
</style>