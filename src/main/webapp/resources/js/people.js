

$(function() {
	$("input.numeric").numeric();	
	
	$("#grid")
			.jqGrid(
					{
						url : 'retrievePeople',
						datatype : "json",
						mtype : 'GET',
						height : 300,
						colNames : [ 'First Name', 'Last Name', 'Sex',
								'Civil Status', 'Age', 'Country', 'Email' ],
						colModel : [ {
							name : 'firstName',
							index : 'firstName',
							sorttype : "text"
						}, {
							name : 'lastName',
							index : 'lastName',
							sorttype : "text"
						}, {
							name : 'sex',
							index : 'sex',
							sorttype : "text"
						}, {
							name : 'civilStatus',
							index : 'civilStatus',
							sorttype : "text",
							editable: true, 
							edittype:"select",
							formatter:'select', 
							editoptions:{value:"0:Single;1:Married;2:Divorced"}
						
						}, {
							name : 'age',
							index : 'age',
							sorttype : "number",
							editable : true,
							editoptions:{dataInit: function (elem) {$(elem).numeric(); }}, 
							formatter:'int'
						}, {
							name : 'country',
							index : 'country',
							sorttype : "text"
							
								
						}, {
							name : 'email',
							index : 'email',
							sorttype : "text"
						}],
						loadui: "block",  
						  rowNum:100,
					      rowList:[50,100,200, 'All'],
					      viewrecords: true, 
					      sortorder: "desc",
					      loadonce:true,
						  autowidth: true,
					      shrinkToFit : true,
					      hidegrid: false,
						'cellEdit' : true,
						'cellsubmit' : 'remote',
						'cellurl' : 'edit',
						ondblClickRow: function(id){ 
				    	  $('#grid').jqGrid('delRowData',id);
				    	  var selectedRows = [];
						  var rows = jQuery("#grid").getDataIDs();
						  for(i=0;i<rows.length;i++)
						  {
							  row=$("#grid").getRowData(rows[i]);
							  selectedRows.push(rows[i]);
					   		  

						  }
						  $.ajax({
						    	 url : 'updateSeleccionados?selectedRows='+selectedRows
					            
					        });  
				    	 
				       }
					});
	$("#list2").jqGrid('navGrid', '#pager2', {
		edit : false,
		add : false,
		del : false
	});

	
	
	$("#message").dialog({
		autoOpen : true,
		height : 150,
		width : 300,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Cerrar : function() {
				$(this).dialog("close");
			}
		}
	});
	
});
