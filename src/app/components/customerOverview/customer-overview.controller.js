import { customersData, navigationData } from './../../mockData/customers-data';

class CustomerOverviewController {
    constructor( StorageService, $state ) {
        'ngInject'
        this.storage = StorageService;
        this.state = $state;
        this.customers
    }

    $onInit(){
        this.customers = this.getCustomers();
    }

    /**
    * gets all the customers data form the localstorage
    * @return {Array}
    */
    getCustomers(){
        return this.storage.getAll('customers');
    }


    /**
    * @param {string} customerId
    * @param {string} state  edit or create
    * go to customer details state
    */
    editCreateCustomer(id, state){
        this.state.go(`customer-details`, {id: id,state: state});
    }

    /**
    * @param {string} customerId
    * deletes a customer based on id form localStorage and the scope
    */
    deleteCustomer(id){
        this.customers = this.storage.deleteItem( id );

    }

    /**
    * @param {string} customerId
    * go to cusmoter navigation details
    */
    navigationDetails(id){
        this.state.go(`navigation-details`, {id: id});
    }


}

export default CustomerOverviewController;
