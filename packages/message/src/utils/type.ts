// 消息样式
type MessageStyle = {
    icon: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
};

type MessageStyleKeys = "info" | "success" | "warn" | "error" | "loading"; // 支持的类型

export type IMessageStyle = {
    [key in MessageStyleKeys]: MessageStyle;
};
