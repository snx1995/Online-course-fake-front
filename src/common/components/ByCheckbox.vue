<template>
    <span class="by-checkbox">
        <i :class="iconClass" @click="$emit('input', !value)" :hint="hint"></i>
        <slot></slot>
        <input type="checkbox" :name="name" :value="value">
    </span>
</template>
<script>
export default {
    name: "ByCheckbox",
    props: {
        boxStyle: {
            type: String,
            default: "default"
        },
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String, 
            default: "checkbox"
        },
        hint: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            styles: {
                default: {
                    t: "icon-check_box",
                    f: "icon-check_box_outline_blank"
                },
                like: {
                    t: "icon-favorite",
                    f: "icon-favorite_border"
                },
                toggle: {
                    t: "icon-toggle-on",
                    f: "icon-toggle-off"
                },
                face: {
                    t: "icon-smile2",
                    f: "icon-sad"
                },
                default2: {
                    t: "icon-check-alt",
                    f: "icon-denied"
                },
                location: {
                    t: "icon-my_location",
                    f: "icon-location_searching"
                },
                star: {
                    t: "icon-star1",
                    f: "icon-star-o"
                }
            }
        }
    },
    computed: {
        iconClass() {
            let style = this.styles[this.boxStyle];
            if (!style) style = this.styles["default"];
            if (this.value) return style.t;
            return style.f;
        }
    }

}
</script>
<style lang="less" scoped>
    .by-checkbox {
        color: inherit;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 5px;
        i {
            cursor: pointer;
            font-size: 1.2em;
            margin-right: 5px;
        }
        input {
            display: none;
        }
    }
</style>
