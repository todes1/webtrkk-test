import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepicker from 'angularjs-datepicker'

import Components from './components/components';
import AppComponent from './app.component';
import servicesModule from './services/services.module';
import FiltersModule from './filters/filters.module';
import directivesModule from './directives/directives.module';

import '../style/app.scss';

const MODULE_NAME = 'app';
const requires = [
    uiRouter,
    '720kb.datepicker',
    FiltersModule,
    directivesModule,
    Components,
]
angular.module('app', requires)
.config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true);
})
.component(MODULE_NAME, AppComponent)

export default MODULE_NAME;
