class navigationController {
    constructor( $state, StorageService ) {
        this.state = $state;
        this.storage = StorageService;
    }
    /**
    * storing the navigation;
    */
    $onInit(){
        this.navigationData = this.getNavigationData();
    }

    /**
    * retunrs to over view state
    */
    goToOverview(){
        this.state.go('customer-overview');
    }

    /**
    * gets the navigation data by customer id
    * customer id is retrived by the state parameters
    */
    getNavigationData(){
        return this.storage.getItem('navigation', this.state.params.id);
    }

}

export default navigationController;
