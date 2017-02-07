class TrainingCtrl {
    constructor($interval) {
        'ngInject';

        this.pulse = 134;
        this.photo = "http://gorabbit.ru/upload/uploader/23d/23dae1e5c7c29744e0a22766a13b170a.jpeg";

        // TODO эмуляция получения данных с сервера, убрать
        $interval(() => this.pulse = parseInt(Math.random() * (100 - 60) + 60, 10), 5000);
    }
}

export default TrainingCtrl;
