class LayoutCtrl {
    constructor() {
        'ngInject';

        this.translateLoaded = false;

        $rootScope.$on('$translateChangeEnd', () =>
            this.translateLoaded = true);
    }
}

export default LayoutCtrl;
