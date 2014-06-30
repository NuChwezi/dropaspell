
chrome.tabs.executeScript(
    null,
    {
        code: "document.body.appendChild(document.createElement('script')).src='" + 
        chrome.extension.getURL("annyang.min.js") +"';" 
    },
    function(results){
            chrome.tabs.executeScript(
                null,
                {
                    code: "document.body.appendChild(document.createElement('script')).src='" + 
                    chrome.extension.getURL("jquery-2.1.1.min.js") +"';" 
                },
                function(results){
                        chrome.tabs.executeScript(
                            null,
                            {
                                code: "document.body.appendChild(document.createElement('script')).src='" + 
                                chrome.extension.getURL("magick.js") +"';" 
                            },
                            null
                        );
                }
            );
    }
);

