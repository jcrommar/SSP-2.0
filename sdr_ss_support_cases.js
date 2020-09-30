/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 * @NModuleScope SameAccount
 */
define(['N/search'],
/**
 * @param {search} search
 */
function(search) {
   
    /**
     * Definition of the Scheduled script trigger point.
     *
     * @param {Object} scriptContext
     * @param {string} scriptContext.type - The context in which the script is executed. It is one of the values from the scriptContext.InvocationType enum.
     * @Since 2015.2
     */
    function execute(scriptContext) {
        var caseSearh = search.load({
            id : 'customsearch_sdr_escalated_support_cases'
        });

        var searchResults = caseSearh.run().getRange({
            start : 0,
            end : 9
        });
    }

    return {
        execute: execute
    };
    
});


//Code that is debugged.
    //require(['N/search'],
   //    /**
   //     * @param {search} search
   //     */
   //    function(search) {
   //       
   //            var caseSearh = search.load({
   //                id : 'customsearch_sdr_escalated_support_cases'
   //            });
   //     
   //            var searchResults = caseSearh.run().getRange({
   //                start : 0,
   //                end : 9
   //            });
   //     
   //    var x = 0;
   //        
   //    });