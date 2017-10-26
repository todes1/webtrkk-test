import angular from 'angular';
import uiRouter from 'angular-ui-router';

import customerOverviewComponent from './customer-overview.component';
import servicesModule from './../../services/services.module';

let customerOverviewModule = angular.module('customer-overview', [
    uiRouter,
    servicesModule,
])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('customer-overview', {
            url: '/',
            template: '<customer-overview></customer-overview>'
        });
    })
    .component('customerOverview', customerOverviewComponent)
    .name

export default customerOverviewModule;
