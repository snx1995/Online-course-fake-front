<template>
    <div class="by-modal-container">
        
        
    </div>
</template>
<style lang="scss" scoped>
    .by-modal-container {
        
    }
</style>
<script>
export default {
    name: 'ByModal',
    methods: {
        newDialog(option) {

        }
    }
}

function handleParam(p) {
    let param = {
        msg: '',
        yes() {

        },
        no() {

        }
    }
    switch (typeof p) {
        case 'object':
            param.msg = p.msg;
            param.yes = p.yes;
            param.no = p.no;
            break;
        default:
            break;
    }
}
</script>
