<template>
    <div>
        <el-dialog title="提示" v-model="visible" width="30%" @close="onClose">
            <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>
            <strong>额外的内容</strong>
            <template #footer>
                <span class="dialog-footer">
                    <el-button size="mini" @click="onClose">取 消</el-button>
                    <el-button size="mini" type="primary" @click="onConfirm">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, watch } from 'vue'
interface Props {
    dialogVisible: boolean
}
interface State {
    visible: boolean
}
export default defineComponent({
    name: 'Dialog',
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const { dialogVisible } = toRefs(props as Props)
        const parent = { ...context }
        const state = reactive<State>({
            visible: dialogVisible.value,
        })
        watch(
            dialogVisible,
            newValue => {
                state.visible = newValue
            },
            { immediate: true },
        )
        const onClose = () => {
            parent.emit('update:dialogVisible', false)
        }
        const onConfirm = () => {
            parent.emit('on-confirm', '子组件的值')
        }
        return {
            ...toRefs(state),
            onClose,
            onConfirm,
        }
    },
})
</script>

