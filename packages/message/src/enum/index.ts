import { IMessageStyle } from "../utils/type";

// 停留时间
export const MESSAGE_TIMEOUT: number = 3000;
// message样式
// 这里的icon是自己在iconfont找的，名称与其对应，详细可参考本专栏的“Icon图标组件”文章
export const MESSAGE_STYLE: IMessageStyle = {
    warn: {
        icon: "Warning24Regular",
        color: "#ffa300",
        backgroundColor: "white",
        borderColor: "#ffa300",
    },
    error: {
        icon: "ErrorCircle20Regular",
        color: "#ff002d",
        backgroundColor: "white",
        borderColor: "#ff002d",
    },
    success: {
        icon: "Checkmark12Regular",
        color: "#50fa7b",
        backgroundColor: "white",
        borderColor: "#50fa7b",
    },
    info: {
        icon: "Info20Regular",
        color: "skyblue",
        backgroundColor: "white",
        borderColor: "skyblue",
    },
    loading: {
        icon: "ArrowSync20Filled",
        color: "skyblue",
        backgroundColor: "white",
        borderColor: "skyblue",
    }
};
