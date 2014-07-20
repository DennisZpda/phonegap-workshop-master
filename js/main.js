var app = {
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
    initialize: function() {
        var self = this;
        this.store = new WebSqlStore(function() {
            $('body').html(new HomeView(self.store).render().el);
        });
        // this.store = new MemoryStore(function() {
        //     self.showAlert('Store Initialized', 'Info');
        // });
        // this.store = new LocalStorageStore(function() {
        //     self.showAlert('Store Initialized', 'Info');
        // });
        // $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();