
export const lectures = {
    "async-and-event-loop-in-javascript": {
        name: "Асинхронность и EventLoop в JavaScript",
        description: "Разбираем вопросы связанные с асинхронностью в JavaScript: стек вызовов функций, движок выполнения JS, что такое микротаски и макротаски, очереди и что попадает в microtask queue и macrotask queue, EventLoop и цикл работы браузера",
        href: "/lectures/async-and-event-loop-in-javascript",
        video: "https://vkvideo.ru/video_ext.php?oid=14453319&id=456239444&hash=061dcf0d7d0b8a0b&autoplay=1",
        tags: [
            {label: "JavaScript", color: "orange"},
            {label: "TypeScript", color: "blue"},
            {label: "Async", color: "red"}
        ]
    },
    "oop-and-description-of-reality": {
        name: "ООП и описание реальности",
        description: "Разбираем подход ООП простыми словами с начинающими разработчиками",
        href: "/lectures/oop-and-description-of-reality",
        video: "https://vkvideo.ru/video_ext.php?oid=14453319&id=456239445&hash=10e9415a830fea40&autoplay=1",
        tags: [
            {label: "ООП", color: "violet"},
            {label: "JavaScript", color: "orange"}
        ]
    },
    "plus-and-minus-of-using-typescript": {
        name: "Плюсы и минусы использования TypeScript",
        description: "Разбираем плюсы и минусы использования TypeScript. Безопасность кода, строгая типизация, спорные моменты, документирование кода в TS. Type casting, enum, any и другие опасные моменты",
        href: "/lectures/plus-and-minus-of-using-typescript",
        video: "https://vkvideo.ru/video_ext.php?oid=14453319&id=456239446&hash=3933877fcaffab1a&autoplay=1",
        tags: [
            {label: "TypeScript", color: "blue"}
        ]
    },
};

export const articles = {
    "how-i-got-tired-of-creating-files-and-folders": {
        name: "Как мне надоело создавать файлы и папки", 
        description: "Рассуждаю о проблеме регулярного создания файлов и о том, как поддержать архитектуру и автоматизировать рутину. Написал утилиту на Go для генерации структур файлов по шаблонам", 
        href: "/articles/how-i-got-tired-of-creating-files-and-folders",
        tags: [
            {label: "Go", color: "red"},
            {label: "Generate", color: "green"}
        ]
    },
};

export const projects = {};

export const counterChart = {
    "lectures": {
        name: "Лекции",
        value: Object.keys(lectures).length,
    },
    "articles": {
        name: "Статьи",
        value: Object.keys(articles).length,
    },
    "projects": {
        name: "Проекты",
        value: Object.keys(projects).length,
    }
}