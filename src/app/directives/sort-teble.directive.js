/**
* sorting table directive that uses attributes
*
* usage:
* <thead>
*     <tr>
*        <th sort by="order" reverse="reverse" order="'name'">Name</th>
*        <th>Phone</th>
*        <th sort by="order" reverse="reverse" order="'age'" start="'age'">Age</th>
*     </tr>
* </thead>
* ....
* <tr ng-repeat="item in $ctrl.items | orderBy:order:reverse">
*/

class SortTable {
    constructor() {
        this.template = `<a ng-click="onClick()">
        <span ng-transclude></span>
            <i class="glyphicon" ng-class="{\'glyphicon-arrow-up\' : order === by && !reverse,  \'glyphicon-arrow-down\' : order===by && reverse}"></i>
        </a>`;
        this.restrict = 'A';
        this.transclude = true;
        this.scope = {
            order: '=',
            by: '=',
            reverse : '=',
            start: '=?'
        }
    }

    link(scope, element){
        scope.by = scope.start;
        scope.reverse = false;

        scope.onClick = function(){
            console.log(scope.order)

            if (scope.order === scope.by) {
                scope.reverse = !scope.reverse;
            }else{
                scope.by = scope.order ;
                scope.reverse = false;
            }
        }
    }
}


export default SortTable;
