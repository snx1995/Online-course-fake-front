<template>
    <div class="im-pane">
        <div class="im-indicator" @click="showIMPane = !showIMPane" v-show="!showIMPane">
            {{msgUnread == 0 ? "全部已读" : msgUnread + "条未读消息"}}
        </div>
        <transition name="fade">
            <div class="im-pane-containter" v-show="showModal">
                <div class="im-pane-mask" @click="showIMPane = false"></div>
                <div class="im">
                    <div class="im-header">
                        <span>即时消息 - {{msgUnread}}条未读 - {{currentFriend.name}}</span>
                    </div>
                    <div class="im-left">
                        <ul class="friend-list">
                            <li v-for="(msg, index) in msgFriendList" :key='msg.id' @click='changeCurrentFriend(index)'>
                                <img :src="'/media' + msg.avatar" alt="">
                                <span class="im-msg">
                                    <span class="friend-name">{{msg.name}}</span>
                                    <span class="last-msg">{{msg.lastMsg}}</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="im-right">
                        <div class="msg-container">
                            <ul class="msg-list">
                                <li v-for="(msg, index) in msgList" :key='index' :class='msg.type'>
                                    <img :src="'/media' + (msg.type == 'in' ? currentFriend.avatar : loginUser.img)" class="avatar">
                                    <p class="msg">{{msg.msg}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="im-input-container">
                            <im-input v-model="input" @send='send'/>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import ImInput from './ImInput';
export default {
    name: "IMPane",
    components: {ImInput},
    data() {
        return {
            msgUnread: 0,
            showIMPane: false,
            msgFriendList: [
                {id: 1, avatar: '/resource/default.png', name: 'friend1', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 2, avatar: '/resource/default.png', name: 'friend2', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 3, avatar: '/resource/default.png', name: 'friend3', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 4, avatar: '/resource/default.png', name: 'friend4', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 5, avatar: '/resource/default.png', name: 'friend5', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 6, avatar: '/resource/default.png', name: 'friend6', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 7, avatar: '/resource/default.png', name: 'friend7', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 8, avatar: '/resource/default.png', name: 'friend8', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 9, avatar: '/resource/default.png', name: 'friend9', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 10, avatar: '/resource/default.png', name: 'friend10', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 11, avatar: '/resource/default.png', name: 'friend11', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 12, avatar: '/resource/default.png', name: 'friend12', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 13, avatar: '/resource/default.png', name: 'friend13', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 14, avatar: '/resource/default.png', name: 'friend14', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 15, avatar: '/resource/default.png', name: 'friend15', lastMsg: 'this is a very very long msg', date: '18:00'},
                {id: 16, avatar: '/resource/default.png', name: 'friend16', lastMsg: 'this is a very very long msg', date: '18:00'},
            ],
            input: '',
            msgList: [
                {type: 'in', msg: 'This is a very very very very very very very very very very very very very very very very very very very very very very very very very very long text.'},
                {type: 'out', msg: 'test'}
            ],
            currentFriend: {
                name: 'current friend',
                avatar: '/resource/default.png'
            }
        }
    },
    methods: {
        send() {
            const msg = this.input;
            
            if (msg.length > 0 && msg.length <= 300) {
                this.msgList.push({type: 'out', msg});
                this.input = '';
            }
        },
        changeCurrentFriend(index) {
            this.currentFriend = this.msgFriendList[index];
        }
    },
    computed: {
        showModal() {
            if (this.showIMPane) {
                this.$emit("open-modal");
                document.body.style.overflow = 'hidden';
            } else document.body.style.overflow = 'auto';
            return this.showIMPane;
        },
        loginUser() {
            return this.$store.state.userStore.user;
        }
    }
}
</script>
<style lang="scss" scoped>
    .im-pane {
        z-index: 1000;
        .im-indicator {
            z-index: inherit;
            padding: 0 20px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
            color: #fff;
            position: fixed;
            bottom: 0;
            right: 20px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            width: fit-content;
            background-color: rgb(247, 72, 72);
            box-shadow: 0px 0 12px rgba(7, 17, 27, 0.2);
        }
        .im-pane-containter {
            z-index: inherit;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .im-pane-mask {
                z-index: inherit;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.3);
            }
            .im {
                overflow: hidden;
                z-index: 1001;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1000px;
                height: 600px;
                background-color: #fff;
                border-radius: 10px;

                $leftWidth: 200px;
                $headerheight: 40px;
                .im-header {
                    height: $headerheight;
                    width: 100%;
                    background-color: rgb(244, 244, 244);
                    display: flex;
                    align-items: center;
                    span {
                        margin-left: 30px;
                        font-size: 0.8em;
                    }
                }
                .im-left {
                    border-right: 4px solid rgb(244, 244, 244);
                    box-sizing: border-box;
                    width: $leftWidth;
                    height: auto;
                    position: absolute;
                    top: $headerheight;
                    left: 0;
                    bottom: 0;
                    margin: 0;
                    overflow: auto;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    .friend-list {
                        width: 100%;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        li {
                            display: flex;
                            position: relative;
                            width: 100%;
                            height: 60px;
                            border-bottom: 2px solid rgb(244, 244, 244);
                            cursor: pointer;
                            &:hover {
                                background-color: rgb(244, 244, 244);
                            }
                            img {
                                width: 44px;
                                height: 44px;
                                border: 4px solid rgb(244, 244, 244);
                                // position: absolute;
                                // top: 50%;
                                // left: 10px;
                                // transform: translateY(-50%);
                                border-radius: 50%;
                                margin-top: 6px;
                                margin-left: 6px;
                            }
                            .im-msg {
                                margin-left: 10px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                span {
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    max-width: 120px;
                                    white-space: nowrap;
                                    
                                }
                                .friend-name {
                                    font-weight: bold;
                                }
                                .last-msg {
                                    font-size: 0.8em;
                                    font-weight: 100;
                                }
                            }
                        }
                    }
                }
                .im-right {
                    border-right: 4px solid rgb(244, 244, 244);
                    position: absolute;
                    left: $leftWidth;
                    top: $headerheight;
                    bottom: 0;
                    right: 0;
                    width: auto;
                    height: auto;
                    margin: 0;
                    .msg-container {
                        width: 100%;
                        height: 80%;
                        box-sizing: border-box;
                        background-color: #eee;
                        border: none {
                            bottom: 5px solid rgb(244, 244, 244);
                        }
                        .msg-list {
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            overflow: auto;
                            list-style: none;
                            padding: 10px 20px;
                            margin: 0;
                            li {
                                box-sizing: border-box;
                                width: 100%;
                                height: auto;
                                margin: 0 {
                                    top: 10px;
                                }
                                display: flex;
                                &.out {
                                    flex-direction: row-reverse;
                                    .msg {
                                        background-color: #00b3ee;
                                        &:after {
                                            right: unset;
                                            left: 100%;
                                            border: 6px solid transparent {
                                                left: 6px solid #00b3ee;
                                            }
                                        }
                                    }
                                    .avatar {
                                        background-color: #00b3ee;
                                    }
                                }
                                .avatar {
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 50%;
                                    margin: 10px;
                                    background-color: #f74848;
                                }
                                .msg {
                                    position: relative;
                                    background-color: #f74848;
                                    color: #fff;
                                    max-width: 80%;
                                    padding: 5px 10px;
                                    border-radius: 8px;
                                    word-break: keep-all;
                                    white-space: pre-line;
                                    word-wrap: break-word;
                                    &:after {
                                        position: absolute;
                                        top: 8px;
                                        right: 100%;
                                        content: '';
                                        border: 6px solid transparent {
                                            right: 6px solid #f74848;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .im-input-container {
                        box-sizing: border-box;
                        width: 100%;
                        height: 20%;
                        border-bottom: 5px solid rgb(244, 244, 244);
                    }
                }
            }
        }
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
</style>
