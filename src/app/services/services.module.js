import angular from 'angular';

import StorageService from './api.service';

let servicesModule = angular.module('app.services', [])
.service({
    StorageService
}).name;

export default servicesModule;
