/**

*  Redirects to cart page
* 	@input CurrentRequest : dw.system.Request
*   
*	@output redirect : Boolean
*	@output obj : Object
*/





function execute( pdict ) {

    var helper = require('*/cartridge/scripts/affirm/checkoutNowHelper');
    var request = pdict.CurrentRequest;  
    
    pdict.redirect = helper.Cancel();
    pdict.obj = {};

    return PIPELET_NEXT;

}
