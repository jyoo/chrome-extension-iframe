(function ($, c, d) {

    $("html, body").mouseup(function () {
        document.execCommand("copy");
    });


    c.storage.onChanged.addListener(function(changes, namespace) {

        // Show or hide sidebar depending on the value of toggle key
        for (var key in changes) {

            if (key == 'toggle') {
                if (changes[key].newValue == false) $("#cli-container").hide();
                else $("#cli-container").show();
            }

            else if (key == 'view') {
                $("#cli-container").attr("src", c.runtime.getURL(changes[key].newValue));
            }

        }
    })


    
    c.runtime.onMessage.addListener(function (request, sender, response) {


    });



    // Wait for document to load.
    $(d).ready(function () {

        c.storage.local.get(["view", "toggle"], function (item) {

            console.log(item);
            var iframe = document.createElement("iframe");

            if (item["view"]) $(iframe).attr("src", c.runtime.getURL(item["view"]));
            else $(iframe).attr("src", c.runtime.getURL("view/index.html"));

            $(iframe).attr("id", "cli-container");

            
            if (item['toggle']) {
                $(iframe).show();
            } else {
                $(iframe).hide();
            }
            

            // Add Iframed Chy Data
            $(d.body).append(iframe);

        });

    });

})(jQuery, chrome, document);