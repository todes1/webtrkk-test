import angular from 'angular';
import uiRouter from 'angular-ui-router';

import navigationComponent from './navigation.component';
import servicesModule from './../../services/services.module';

let navigationModule = angular.module('navigation-details', [
    uiRouter,
    servicesModule
])
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
        .state('navigation-details', {
            url: '/navigation-details/:id',
            template: '<navigation-details></navigation-details>'
        });
    })
    .component('navigationDetails', navigationComponent)
    .name

export default navigationModule;
