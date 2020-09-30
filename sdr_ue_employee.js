/**
* @NScriptType UserEventScript
* @NAPIVersion 2.0
*/
define(['N/record'],
/**
 * @param {record} record
 */
	function(record) {

		return {
			afterSubmit : function (context) {
//				log.debug('Hello, World!')

				var employee 		= context.newRecord;
				var empCode 		= employee.getValue('custentity_sdr_employee_code');
				var supervisorId 	= employee.getValue('supervisor');

				log.debug('Employee Code', empCode);
				log.debug('Supervisor ID', supervisorId);

				//MODULE 05 - Create phone call record.

				if (context.type == context.UserEventType.CREATE) {
					var phoneCall = record.create({
						type : record.Type.PHONE_CALL,
						defaultValues : {
							customform : -150
						}
					});
					
					var title = phoneCall.getValue('title');
					var phone = phoneCall.getValue('phone');
					var assigned = phoneCall.getValue('assigned')

					phoneCall.setValue('title', 'Call HR for benefits');
					phoneCall.setValue('assigned', employee.id);
					phoneCall.setValue('phone',  employee.phone);
					phoneCall.save();

					var event = record.create({
						type : record.Type.EVENT,
						isDynamic : true
					});
					event.setValue('title', 'Welcome meeting with supervisor');

					event.selectNewLine({sublistId : 'attendee'});
					event.setCurrentSublistValue({
						sublistId : 'attendee',
						fieldId : 'attendee',
						value : employee.id
					});
					event.commitLine({sublistId : 'attendee'});

					event.selectNewLine({sublistId : 'attendee'});
					event.setCurrentSublistValue({
						sublistId : 'attendee',
						fieldId : 'attendee',
						value : employee.getValue('supervisor')
					});
					event.commitLine({sublistId : 'attendee'});

					event.save();
				}
			}
		};
	}); 
