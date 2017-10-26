import navigationController from './navigation.controller';
import navigationModule from './navigation.module';

const mockData = [
    {
        customerId: 1,
        page: 'A',
        timestamp: '2013-­06-­01 10:10:12'
    },
    {
        customerId: 1,
        page: 'B',
        timestamp: '2013-­06-­01 10:11:12'
    },
]

describe('Customer navigation Details', () => {
    let $rootScope, componentController, $localStorage, StorageService, $state, mockstorageService,
    $location;

    beforeEach(() => {
        window.module(navigationModule);
        /**
        * mock service that returns mock data
        */
        mockstorageService = () => {
            const service = {
                getItem: (id) => {
                     return([mockData])
                },
            }
            return service;
        };
    });

    beforeEach(inject((_$rootScope_, _$state_, _StorageService_, _$location_, $componentController) => {
        $rootScope = _$rootScope_;
        $state = _$state_;
        $location = _$location_;
        StorageService = _StorageService_;
        componentController = $componentController('navigationDetails',{
            // $scope: $rootScope.$new(),
            StorageService: mockstorageService(),
        });
        componentController.$onInit();
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
        it('default component should be navigations details', () => {
          $location.url('/navigation-details/1');
          $rootScope.$digest();
          console.log($state.current)
          expect($state.current.name).toEqual('navigation-details');
        });
    });


    describe('Controller', () => {
        it('sould be defined', () => { // erase if removing this.name from the controller
            expect(componentController).toBeDefined();
        });

        it('should get the data on init', () => {
            expect(componentController.navigationData.length).not.toBe(0)
        });
    });
});
