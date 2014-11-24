Ext.define('MVVM.controller.Master', {
	extend : 'Ext.app.Controller',

	init : function() {
		this.control({
			'mvvm-MasterView' : {
				select : this.onGridSelect
			}
		});
	},

	onGridSelect : function(grid, record, index, eOpts) {
		// grab a reference to the Detail view...
		// we could have used a controller "ref", but those can also be
		// problematic
		var detailView = Ext.ComponentQuery.query('mvvm-DetailView')[0];

		// set the form's ViewModel binding
		detailView.getViewModel().setData({
			rec : record
		});
	}
});