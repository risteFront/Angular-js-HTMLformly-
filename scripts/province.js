(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('province', province);
        
        function province() {
            function getProvinces() {
                return [
                    {
                        "name": "Ohrid",
                        "value":"Ohrid"
                    },
                    {
                        "name":"Bitola",
                        "value":"Bitola"
                    },
                    {
                        "name":"Struga",
                        "value":"Struga"
                    },
                    {
                        "name":"Skopje",
                        "value":"Skopje"
                    },
                    {
                        "name":"Kumanovo",
                        "value":"Kumanovo"
                    },
                    {
                        "name":"Debar",
                        "value":"Debar"
                    },
                    {
                        "name":"Strumica",
                        "value":"Strumica"
                    },
                    {
                        "name":"Veles",
                        "value":"Veles"
                    },              
                    {
                        "name":"Kavadarci",
                        "value":"Kavadarci"
                    },
                    {
                        "name":"Negotino",
                        "value":"Negotino"
                    },
                    {
                        "name":"Stip",
                        "value":"Stip"
                    },
                    {
                        "name":"Berovo",
                        "value":"Berovo"
                    },
                    {
                        "name":"Bogdanci",
                        "value":"Bogdanci"
                    },
                ];
            }

            return {
                getProvinces: getProvinces
            }
        }
        
})();