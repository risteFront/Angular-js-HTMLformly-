(function(){
	'use strict';

	angular.module('formlyApp')
	.controller('MainCtrl',MainCtrl)
	function MainCtrl(province){
		var vm = this;

		vm.rental = {};
		    vm.rentalFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true
            }
        },
        {
        key: 'under25',
        type: 'checkbox',
        templateOptions: {
            label: 'Are you under 25?',
           },
        // 	Da se skrie poleto dokolku nema vneseno E-mail
        hideExpression: '!model.email'
	    },
	    {
	   		 template:'<hr/>'

	    },
	    {
	        key: 'province',
	        type: 'select',
	        templateOptions: {
	            label: 'City',
	            // Pristap do servisot
	            options: province.getProvinces()
	        },
	        hideExpression: '!model.email'
	    },
	    {
        key: 'insurance',
        type: 'input',
        templateOptions: {
            label: 'Insurance Policy Number',
            placeholder: 'Enter your insurance policy number'
       		 },
        hideExpression: '!model.under25 || !model.province',
    	},
    	{
        key: 'license',
        type: 'input',
        templateOptions: {
            label: 'Driver\'s License Number',
            placeholder: 'Enter your drivers license number (A1234-12345-12345)'
        },
        hideExpression: '!model.province',
        validators: {
            // Proverka dali vnesenata vrednost e validna
            driversLicense: function($viewValue, $modelValue, scope) {
                var value = $modelValue || $viewValue;
                if(value) {
                    // Ja povikuvame funkcijata so regex
                    return validateDriversLicence(value)
                }
           }
        },
        expressionProperties: {
            // Bidejki nema vo drugi gradovi Rent a Car moze da go izberime samo Ohrid
            'templateOptions.disabled': function($viewValue, $modelValue, scope) {
                if(scope.model.province === 'Ohrid') {
                    return false;
                }
                return true;
            }
        }
    }
    ];
    // Daden regex na koj mu pravime bind vo driverLicence funkcijata i testirame dali vrednosta e validna
     function validateDriversLicence(value) {
        return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
    }
	}
})()