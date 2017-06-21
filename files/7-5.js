
var facebookProfile = {
    name: "Bill",
    friends: 25,
    messages: ["hey", "hello", "what's up", "awesome"],
    
    postMessage: function (message) {
        this.messages.push(message);
        return this.messages;
    },
    
    deleteMessage: function (index) {
        this.messages.splice(index,1);
        return this.messages;
    },
    
    addFriend: function () {
        this.friends ++;
        return this.friends;
    },
    
    removeFriend: function () {
        this.friends --;
        return this.friends;
    },
};