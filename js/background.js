'use strict';

(function ($, c) {

    
    // Toggle when an extension icon is clicked.
    c.browserAction.onClicked.addListener(function () {

        c.storage.local.get('toggle', function (item) {

            var toggle;
            var view;
            
            if (typeof item['toggle'] === 'boolean') toggle = !item['toggle'];
            else toggle = true;

            if (item["view"]) view = item["view"];
            else view = "view/index.html";

            c.storage.local.set({'toggle': toggle, 'view': view});  

    });

});


})(jQuery, chrome);
