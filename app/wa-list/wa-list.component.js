(function () {
    'use strict';

    class WaListController {
        name = "alex";
    }

    angular
        .module ('waComponents')
        .component ('waList', {
            templateUrl: 'app/wa-list/wa-list.component.html',
            transclude: true,
            controller: WaListController,
            controllerAs: 'ctrl',
            bindings: {
                title: "<"
            }
        });

} ());
