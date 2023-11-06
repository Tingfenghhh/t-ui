import Message from './src/index.vue'
import { MESSAGE_TIMEOUT } from "./src/enum"
import { createVNode, render } from 'vue'
import { withInstall } from '../withInstall'

const div = document.createElement('div')
// 添加到body上
document.body.appendChild(div)

// 定时器标识
let timer: any = null

const renderMessage = (vnode: any, timeout: number) => {
    render(null, div);// 清空上一个虚拟dom
    render(vnode, div);
    clearTimeout(timer);// 清理上一个定时器
    timer = setTimeout(() => {
        render(null, div);
    }, timeout);
};

const TMessageEle = withInstall(Message)
export default {
    error: (text: string, timeout: number = MESSAGE_TIMEOUT) => {
        const vnode = createVNode(Message, { type: "error", text, timeout });
        renderMessage(vnode, timeout);
    },
    warn: (text: string, timeout: number = MESSAGE_TIMEOUT) => {
        const vnode = createVNode(Message, { type: "warn", text, timeout });
        renderMessage(vnode, timeout);
    },
    success: (text: string, timeout: number = MESSAGE_TIMEOUT) => {
        const vnode = createVNode(Message, { type: "success", text, timeout });
        renderMessage(vnode, timeout);
    },
    info: (text: string, timeout: number = MESSAGE_TIMEOUT) => {
        const vnode = createVNode(Message, { type: "info", text, timeout });
        renderMessage(vnode, timeout);
    },
    TMessageEle
};
