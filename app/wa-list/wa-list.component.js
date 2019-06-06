(function () {
    'use strict';

    class WaListController {
        name = "alex";
    }

    angular
        .module ('waComponents')
        .component ('waList', {
            templateUrl: 'app/wa-list/wa-list.component.html',
            transclude:{
              'slot':'?waListItem'
            },
            controller: WaListController,
            controllerAs: 'ctrl',
            bindings: {
                title: "<"
            }
        });

} ());
