import angular from 'angular';
import uiRouter from 'angular-ui-router';

import detailsComponent from './details.component';
import servicesModule from './../../services/services.module';

let customerDetailsModule = angular.module('customer-details', [
    uiRouter,
    servicesModule
])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('customer-details', {
            url: '/customer-details/:state/:id',
            template: '<customer-details></customer-details>'
        });
    })
    .component('customerDetails', detailsComponent)
    .name

export default customerDetailsModule;
