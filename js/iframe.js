(function ($, c, d) {
    var PREFIX = "";
    var progressDisplay;
    var errorDisplay;
    var strictlyRequiredFields = [
        {
            name: "title", 
            regex: new RegExp(/^\S/)
        }, 
        {
            name: "date", 
            regex: new RegExp(/[\d\-]+/)
        },
        {
            name: "city", 
            regex: new RegExp(/^\S/)
        },
        {
            name: "country",
            regex: new RegExp(/^\S/)
        }
    ];

    var alternatingRequiredFields = [
        {
            name: "province",
            regex: new RegExp(/^\S/)
        }
    ];



    $(".add").click(function() {
        c.storage.local.set({'view': 'view/add.html'}); 
    })

    $(".index").click(function() {
        c.storage.local.set({'view': 'view/index.html'}); 
    })
    
})(jQuery, chrome, document);