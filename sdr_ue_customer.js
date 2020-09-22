/**
* @NScriptType UserEventScript
* @NAPIVersion 2.0
*/
define([],

	function() {

		return {
			afterSubmit : function (context) {
//				log.debug('Hello, World!')

				var customer = context.newRecord;
				var salesrep = customer.getValue('salesrep');
				var phone = customer.getText('phone');
				var type = customer.getValue('isperson');

				log.debug('Sales Representative', salesrep);
				log.debug('Phone #', phone);
				log.debug('Customer Type', type);
			}
		};
	});