Ext.define('MVVM.view.Detail', {
	extend : 'Ext.form.Panel',
	xtype : 'mvvm-DetailView',

	requires : [
	// commented out because Fiddle barfs on the Ext.Loader
	'MVVM.view.DetailViewModel' ],

	title : 'Detail Panel',
	frame : true,
	padding : 10,

	viewModel : {
		type : 'detailform' // references DetailViewModel
	},

	items : [ {
		xtype : 'textfield',
		bind : '{rec.name}',
		fieldLabel : 'Name'
	}, {
		xtype : 'textfield',
		bind : '{rec.email}',
		fieldLabel : 'Email'
	}, {
		xtype : 'textfield',
		bind : '{rec.phone}',
		fieldLabel : 'Phone'
	}, {
		xtype : 'hiddenfield',
		bind : '{rec.id}'
	}, {
		xtype : 'button',
		text : 'Save',
		itemId : 'SaveRecord'
	} ]
});