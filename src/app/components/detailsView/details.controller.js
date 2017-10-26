class detailsController {
    constructor( $state, StorageService ) {
        this.storage = StorageService;
        this.state = $state;
    }

    $onInit(){
        this.customerId = this.state.params.id
        this.formState = this.state.params.state === 'edit' ? true : false;// editing or creating new user?
        this.customer = this.getCustomer()[0]; //always is the first item
        this.title = this.formState ? 'Customer Details' : 'Add new customer'
    }

    /**
    * retunrs to the customer overview state
    */
    _cancel(){
        this.state.go('customer-overview');
    }

    /**
    * saves th customer to the localstorage and rettturns customer overview state
    */
    _saveCustomer(){
        if (Object.keys(this.customer).length === 7) {
            this.storage.setData('customers', this.customer, this.formState);
            this._cancel();
        }
    }

    /**
    * if formState is true we are editing the customer and gets the data form
    * the local storage.
    * else we are creating new customer. 
    */
    getCustomer(){
        return(
            this.formState ?
            this.storage.getItem('customers', this.customerId) : {}
        )
    }
}

export default detailsController;
