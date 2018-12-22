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
                },
                comment: {
                    t: "icon-commenting",
                    f: "icon-commenting-o"
                },
                eye: {
                    t: "icon-eye",
                    f: "icon-eye-slash"
                },
                square: {
                    t: "icon-square",
                    f: "icon-square-o"
                },
                circle: {
                    t: "icon-circle",
                    f: "icon-circle-o"
                },
                thumbs: {
                    t: "icon-thumbs-up",
                    f: "icon-thumbs-down"
                },
                plane: {
                    t: "icon-paper-plane",
                    f: "icon-paper-plane-o"
                },
                envelope: {
                    t: "icon-envelope-open",
                    f: "icon-envelope-open-o"
                },
                user: {
                    t: "icon-user-circle",
                    f: "icon-user-circle-o"
                },
                idCard: {
                    t: "icon-id-card",
                    f: "icon-id-card-o"
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
