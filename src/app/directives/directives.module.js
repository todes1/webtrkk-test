import angular from 'angular';

import SortTable from './sort-teble.directive';

let directivesModule = angular.module('app.directives', [])
    .directive('sort', () => new SortTable()).name

export default directivesModule;
