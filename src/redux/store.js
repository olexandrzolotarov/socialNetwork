import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import contactsReducer from './contacts-reducer';


export let store = {
    _state: {
        ContactsData: [
            {personID: 1, name: "Alexandr", photo: "https://th.wallhaven.cc/lg/ne/nejzko.jpg",},
            {personID: 2, name: "Lyubov", photo: "https://avatanplus.com/files/resources/mid/58e3d1ab15b3715b39eb0451.jpg", },
            {personID: 3, name: "Alexey", photo: "https://i.pinimg.com/474x/5d/cf/94/5dcf9403075f272f72f730ac2fb21f80--castors-baby-beaver.jpg",},
            {personID: 4, name: "Dmitrij", photo: "https://cdn.eslgaming.com/play/eslgfx/gfx/logos/teams/16284000/16284099_medium.jpg",},
            {personID: 5, name: "Nadejda", photo: "https://pbs.twimg.com/media/Bbsvs8zCUAAv9af.jpg",},
            {personID: 6, name: "Artem", photo: "https://i.pinimg.com/236x/af/75/16/af75167cb5780e728211698de477e790.jpg?nii=t",},
        ],  // Массив данных контактов
        ProfilePage: {
            PostsData: [
                {id: 1, message: "У лукоморья дуб зелёный, Златая цепь на дубе том. И днём и ночью кот учёный всё ходит по цепи кругом.", likesCount: 11},
                {id: 2, message: "Идёт направо — песнь заводит, налево — сказку говорит. Там чудеса: там леший бродит. Русалка на ветвях сидит", likesCount: 28},
                {id: 3, message: "Там на неведомых дорожках - следы невиданных зверей, избушка там на курьих ножках стоит без окон, без дверей", likesCount: 14},
            ],  // Массив данных для постов
            newPostText: {
                text: '',
            } // Строка для нового поста
        }, // Массив данных профайла
        DialogsPage: {
            ChatsData: [
                {id: 1, personID: 1, message: "Небо было желтым, как латунь; его еще не закоптило дымом. За крышами фабрики оно светилось особенно сильно. Вот-вот должно было взойти солнце."},
                {id: 2, personID: 2, message: "Я посмотрел на часы — еще не было восьми. Я пришел на четверть часа раньше обычного."},
                {id: 3, personID: 1, message: "Я открыл ворота и подготовил насос бензиновой колонки. Всегда в это время уже подъезжали заправляться первые машины."},
                {id: 4, personID: 2, message: "Вдруг за своей спиной я услышал хриплое кряхтение, — казалось, будто под землей проворачивают ржавый винт. Я остановился и прислушался."},
                {id: 5, personID: 1, message: "Потом пошел через двор обратно в мастерскую и осторожно приоткрыл дверь."},
                {id: 6, personID: 2, message: "В полутемном помещении, спотыкаясь, бродило привидение. Оно было в грязном белом платке, синем переднике, в толстых мягких туфлях и размахивало метлой; весило оно не менее девяноста килограммов; это была наша уборщица Матильда Штосс."},
                {id: 7, personID: 1, message: "Некоторое время я наблюдал за ней. С грацией бегемота сновала она взад и вперед между автомобильными радиаторами и глухим голосом напевала песню о верном гусаре."},
                {id: 8, personID: 2, message: "На столе у окна стояли две бутылки коньяка. В одной уже почти ничего не оставалось. Накануне вечером она была полна."},
            ],  // Массив данных чатов
            newChatText: {
                text: ''
            },
        }, // Массив данных диалогов
    }, //собираем всё в один объект

    getState () {
        return this._state
    },
    _callSubscriber () {

    }, // Создание переменной ререндера
    subscribe (observer) {
        this._callSubscriber = observer;
    }, // Получения функции ререндера из index.js

    dispatch (action) {
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.ContactsData = contactsReducer(this._state.ContactsData, action);
        this._callSubscriber(store._state);
    },
};


window.store = store;
