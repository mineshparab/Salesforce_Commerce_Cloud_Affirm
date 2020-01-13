/**
*  Checks coupon code and adds coupon to basket if valid
* 	@input CurrentRequest : dw.system.Request
*   
*   @output obj : Object
*
*/





function execute( pdict ) {

    var helper = require('*/cartridge/scripts/affirm/checkoutNowHelper');

    var request = pdict.CurrentRequest;

    var result = helper.ApplyDiscount();
    pdict.obj = result.body;

    return PIPELET_NEXT;

}

