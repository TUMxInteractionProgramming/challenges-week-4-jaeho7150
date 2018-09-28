var yummy = {
    name: String,
    createdOn: Date.now(),
    createdBy: String,
    starred: Boolean,
    expiresln: Number,
    messageCount: Number,
}
 
function Message()    {
    var createdOn = Date.now;
    var expiresOn = new Date;
    expiresOn.setDate(expiresOn.getMinutes + 15);
    var own = true;
    currentLocation();
}

function sendMessage(){
Message();
}

createMessageElement(messageObject){
    
}



