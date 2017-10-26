import CustomerOverviewController from './customer-overview.controller';
import customerOverviewModule from './customer-overview.module';
import StorageService from './../../services/services.module'

describe('Customer Overview', () => {
    let $rootScope, componentController, $localStorage, StorageService, $state, mockstorageService,
    $location;

    beforeEach(() => {
        window.module(customerOverviewModule);

        mockstorageService = () => {
            const service = {
              getAll: ( name ) => {
                  return([
                      {
                          customerId: 1,
                          firstName: 'Peter',
                          lastName: 'Smith',
                          birthday: '1996-10-12',
                          gender: 'm',
                          lastContact: '2013-06-01',
                          customerLifetimeValue: '191,12'
                      },
                      {
                          customerId: 2,
                          firstName: 'Anna',
                          lastName: 'Hopp',
                          birthday: '1987-05-09',
                          gender: 'w',
                          lastContact: '2013-07-08',
                          customerLifetimeValue: '50,99'
                      },
                  ])
              },

              deleteItem: ( id ) => {
                  return([
                      {
                          customerId: 2,
                          firstName: 'Anna',
                          lastName: 'Hopp',
                          birthday: '1987-05-09',
                          gender: 'w',
                          lastContact: '2013-07-08',
                          customerLifetimeValue: '50,99'
                      },
                  ])
              }

            };

            return service;
      };


    });

    beforeEach(inject((_$rootScope_, _$state_, _StorageService_, _$location_, $componentController) => {
        $rootScope = _$rootScope_;
        $location = _$location_;
        $state = _$state_;
        StorageService = _StorageService_;
        componentController = $componentController('customerOverview',{
            $scope: $rootScope.$new(),
            StorageService: mockstorageService()
        })
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
        it('default component should be customer Overview', () => {
          $location.url('/');
          $rootScope.$digest();
          expect($state.current.name).toEqual('customer-overview');
        });
    });

    describe('Controller', () => {
        it('sould be defined', () => { // erase if removing this.name from the controller
            expect(componentController).toBeDefined();
        });

        it('should get the customers on init', () => {
            expect(componentController.customers).not.toBeDefined();
            componentController.$onInit();
            expect(componentController.customers).toBeDefined();
        });

        it('should delete a customer', () => {
            componentController.$onInit();
            expect(componentController.customers.length).toEqual(2);
            componentController.deleteCustomer(1);
            expect(componentController.customers.length).toEqual(1);
        });
    });
});
