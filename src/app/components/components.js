import angular from 'angular';
import customerOverviewModule from './customerOverview/customer-overview.module';
import customerDetailsModule from './detailsView/details.module';
import navigationModule from './navigationData/navigation.module';
let componentModule = angular.module('app.components', [
  customerOverviewModule,
  customerDetailsModule,
  navigationModule
]).name;

export default componentModule;
