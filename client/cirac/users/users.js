
var UserEditModalIV = Mn.ItemView.extend({
	template: "users/templates/users-edit-modal.html",

	ui: {
		"modalCloseBtn":  "button.js-modal-cancel",
		"modalSaveBtn":   "button.js-modal-save"
	},

	events: {
		"click @ui.modalSaveBtn": "updateResource"
	},

	behaviors: {
		CloseModal: {
			behaviorClass: window.Behaviors.CloseModal,  // will listen for clicks on @ui.modalCloseBtn
		},
	},

	updateResource: function(){

		var data = Backbone.Syphon.serialize(this);

		var attrs = {
			"firstName": $.trim(data["edit-user-first-name"]),
			"lastName":  $.trim(data["edit-user-last-name"]),
			"email":     $.trim(data["edit-user-email"])
		};

		// all the fields must be filled (otherwise the validation in the server will reject)
		if(attrs.firstName==="" || attrs.lastName==="" || attrs.email===""){
			alert("Please fill the missing fields");
			return;
		}

		this.ui.modalSaveBtn.prop("disabled", true);

		var self = this;
		Q.delay(150)
			.then(function(){
				return self.model.save(attrs, {wait: true});  // returns a promise
			})
			.catch(function(err){
				var msg = err.responseJSON ? err.responseJSON.message : 
											( err.message ? err.message : "unknown error" );

				// if the model has been deleted in the server in the meantime we get a 404; 
				// the collection in the client is then outdated so we call destroy to remove 
				// the deleted model from the collection; we also abort the ajax request immediately 
				// because we are not interested in the response
				if(err.responseJSON && err.responseJSON.statusCode === 404){
					self.model.destroy().abort();
				}
				
				alert("ERROR: " + msg);
				throw new Error(msg);
			})
			.finally(function(){
				Dashboard.$modal1.modal("hide");
				self.destroy();
			})
			.done();

	},

});


var UserDeleteModalIV = Mn.ItemView.extend({
	template: "users/templates/users-delete-modal.html",

	ui: {
		"modalCloseBtn":  "button.js-modal-cancel",
		"modalDeleteBtn": "button.js-modal-delete",
	},

	behaviors: {
		CloseModal: {
			// will listen for clicks on @ui.modalCloseBtn
			behaviorClass: window.Behaviors.CloseModal,  
		},

		DeleteResourceAndCloseModal: {
			// will listen for clicks on @ui.modalDeleteBtn
			behaviorClass: window.Behaviors.DeleteResourceAndCloseModal,  
		},
	},

});



var UserRowLV = Mn.LayoutView.extend({
	template: "users/templates/users-row.html",
	tagName: "tr",
	ui: {
		"editModalBtn": "button.js-edit",
		"deleteModalBtn": "button.js-delete"
	},
	modelEvents: {
		"change": "render"
	},

	behaviors: {

		ShowEditModal: {
			behaviorClass: window.Behaviors.ShowModal,
			uiKey: "editModalBtn",  // will listen for clicks on @ui.editModalBtn
			viewClass: UserEditModalIV  // and will show this view
		},

		ShowDeleteModal: {
			behaviorClass: window.Behaviors.ShowModal,
			uiKey: "deleteModalBtn",
			viewClass: UserDeleteModalIV 
		},
	},

});

var UsersTableCV = Mn.CompositeView.extend({
	template: "users/templates/users-table.html",
	childView: UserRowLV,
	childViewContainer: "tbody",
});


var UsersTabLV = Mn.LayoutView.extend({
	template: "users/templates/users-tab.html",

	regions: {
		tabContentRegion: "#users-region"
	},

	events: {
		"click a.js-dashboard-sep": "updateView"
	},

	// the initial view will be the list of all users
	onBeforeShow: function(){
		this.showAll();
	},

	updateView: function(e){
		e.preventDefault();

		var $target = $(e.target);
		$target.parent().siblings().removeClass("active");
		$target.parent().addClass("active");

		switch($target.data("tab-separator")){
			case "users-all":
				this.showAll();
				break;
			case "users-new":
				this.showNew();
				break;
			default:
				throw new Error("unknown tab separator");
		}
	},

	showNew: function(){
		alert("To be done");
		// var userNewLV = new UserNewLV({
		// 	model: new UserM()
		// });
		// this.tabContentRegion.show(userNewLV); 
	},

	showAll: function(){
		var usersTableCV = new UsersTableCV({
			collection: usersC
		});

		var self = this;

		Q(usersC.fetch())
			.then(function(){ 
				self.tabContentRegion.show(usersTableCV); 
			})
			.catch(function(err){
				var msg = err.responseJSON ? err.responseJSON.message : 
											( err.message ? err.message : "unknown error" );

				alert("ERROR: " + msg);
				throw new Error(msg);
			})
			.done();
	},


});