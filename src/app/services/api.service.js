import { customersData, navigationData } from './../mockData/customers-data';

class StorageService {
    constructor( $window ) {
        // 'ngInject'
        this.localStorage = $window.localStorage;
        this.createMockdata();
    }

    /**
    * stringify an object in order to store in the localstorage
    * @param {Array}
    * @return {string}
    */
    _serializeData(data){
        return JSON.stringify( data );
    }

    /**
    * parse an object in order to store in the localstorage
    * @param {string} storage key name
    * @return {Array}
    */
    _deserializeStrorage( storage ){
        return JSON.parse( storage );
    }

    /**
    * set new data to a specific key on localStorage
    * @param {string} name of the key on localStorage
    * @param {object} data to set
    */
    setData( name, data, update ){
        let dataArray = this.getAll( name );
        if (!update) {
            dataArray.push( data );
        }else{
            dataArray = this._updateData(dataArray, data);
        }
        this.localStorage.setItem( name, this._serializeData( dataArray ) );
        return dataArray;
    }

    _updateData(dataArray, data){
        dataArray.forEach( (item, index) => {
            if ( item.customerId == data.customerId ) {
                dataArray[index] = data;
            }
        } )

        return dataArray
    }

    /**
    * get single item form a specific key on localStorage
    * @param {string} name of the key on localStorage
    * @param {string} id of the name object item
    * @return {object}
    */
    getItem( name, id ){
        const dataArray = this.getAll( name ) || [];
        return dataArray.filter( item => item.customerId == id);
    }


    /**
    * get all the items from a specific key on localStorage
    * @param {string} name of the key on localStorage
    * @param {string} id of the name object item
    * @return {object}
    */
    getAll( name ){
        const data = this.localStorage.getItem(name);

        return this._deserializeStrorage( data );
    }


    deleteItem( id ){
        let dataArray = {
            customers: this.getAll( 'customers' ),
            navigation: this.getAll( 'navigation' )
        };

        Object.keys(dataArray).forEach( key => {
            dataArray[key] = dataArray[key].filter(item => {
                return item.customerId != id;
            });
            this.localStorage.setItem( key, this._serializeData( dataArray[key] ) );
        } );


        return dataArray.customers;
    }

    /***/
    createMockdata(){
        const customers = this.getAll('customers');
        const navigation = this.getAll('navigation')

        if ( (!navigation || navigation.length === 0) || (!customers || customers.length === 0) ) {
            this.localStorage.setItem( 'customers', this._serializeData( customersData ) );
            this.localStorage.setItem( 'navigation', this._serializeData( navigationData ) );
        }
    }

}

export default StorageService;
