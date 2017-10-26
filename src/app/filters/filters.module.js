import angular from 'angular';
import {ageFilter, genderFilter} from './helpers.filter';


let FiltersModule = angular.module('app.filters', [])
    .filter({
        ageFilter,
        genderFilter
    })
    .name

export default FiltersModule
