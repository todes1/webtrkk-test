import detailsController from './details.controller';
import customerDetailsModule from './details.module';
const mockData = [
    {
        customerId: 5,
        firstName: 'Eric',
        lastName: 'Adam',
        birthday: '1969-11-21',
        gender: 'm',
        lastContact: '2013-­03­‐18',
        customerLifetimeValue: '1019,91'
    }
]
describe('Customer Details', () => {
    let $rootScope, componentController, $localStorage, StorageService, $state, mockstorageService,
    $location;

    beforeEach(() => {
        window.module(customerDetailsModule);
        /**
        * mock service that returns mock data
        */
        mockstorageService = () => {
            const service = {
                getItem: (id) => {
                    return([mockData])
                },

                setData: (newCustomer) => {
                    let data = mockData
                    data[0] = newCustomer;
                }
            }
            return service;
        };
    });

    beforeEach(inject((_$rootScope_, _$state_, _StorageService_, _$location_, $componentController) => {
        $rootScope = _$rootScope_;
        $location = _$location_;
        $state = _$state_;
        StorageService = _StorageService_;
        componentController = $componentController('customerDetails',{
            StorageService: mockstorageService(),
            $state: {
                params:{state: 'edit'},
                go: () => {}
            }
        });
        componentController.$onInit();
    }));


    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
        it('default component should be customer Overview', () => {
          $location.url('/customer-details/edit/1');
          $rootScope.$digest();
          expect($state.current.name).toEqual('customer-details');
        });
    });


    describe('Controller', () => {
        it('sould be defined', () => { // erase if removing this.name from the controller
            expect(componentController).toBeDefined();
        });


        it('should update the customer', () => {
            let customer = componentController.getCustomer(5)[0] //on this view is always the first item
            expect(componentController.customer[0].firstName).toEqual('Eric');

            componentController.customer[0].firstName = 'Jason';
            componentController._saveCustomer(customer);

            expect(componentController.customer[0].firstName).toEqual('Jason');
        });
    });
});
