
type ChatType = {
    id: number;
    name: string;
    message: string;
    count?: number;
    date: Date;
};

type ChatMessageType = {
    time: Date;
    message: string;
    isMe: boolean;
};

export const chats: ChatType[] = [
    {
        id: 1,
        name: "박민수",
        message: "운동가자",
        date: new Date(),
    },

    {
        id: 2,
        name: "김민수",
        message: "저 운동가자",
        date: new Date(),
    },

    {
        id: 3,
        name: "노민수",
        message: "저기로 운동가자",
        date: new Date(),
    }
];

export const messages: ChatMessageType[] = [
    {time: new Date, message: "집에 가고 싶다.", isMe: true},
    {time: new Date, message: "나도 자고 싶다.", isMe: true},
    {time: new Date, message: "그만 자고 싶다.", isMe: false},
    {time: new Date, message: "3시간 자는 건 미친 짓이다.", isMe: false},
    {time: new Date, message: "학교 가기 싫다 썅.", isMe: false},
];