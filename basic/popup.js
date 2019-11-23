$(function(){
    chrome.storage.sync.get('total', function(budget){
        $('#total').text(budget.total);
    })

    $('#spendAmount').click(function(){
        chrome.storage.sync.get('total', function(budget){
            
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }
            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function(budget){
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title: "Limit reached!",
                        message: "Uh oh, look's like you've reached your alloted limit."
                };
                chrome.notifications.create('limitNotif', notifOptions);      
            });

            $('#total').text(newTotal);
            $('#amount').val(' ');
        })
    })
});