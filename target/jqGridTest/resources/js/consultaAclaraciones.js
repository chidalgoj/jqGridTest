function init(){
	unBlock(); 
	$("#caso").focus();	
};
function aclaracionRowClick(index, cb) {
	$.ajax({
		
	   	 url : '/clickOnRow?index='+index+'&checked='+cb.checked
	      
	  });
};



function executeAction(index, status, rowData){
	
	
	$.ajax({
		
   	 url : 'clickOnRow?index='+index+'&checked=true'
      
  });
	var e = document.getElementById("combobox");
	var index = e.selectedIndex;
	switch (index) {
	case 1: //ver Detalles
		window.location.href = "verDetalle";
//		var myGrid = $('#grid'),
//	    selRowId = myGrid.jqGrid ('getRowData', 'selrow');
//	    //celValue = myGrid.jqGrid ('getCell', selRowId, 'cuenta');
//		alert("Select Row:" + selRowId.length );//+", celValue:" + celValue);
		break;    
	case 2: // Agregar Comentarios  
		$("#comentariosTextArea").val("");
		$("#dialogComentarios").dialog("open");
		break;
	case 3: // Eliminar Caso/Folio
		$("#dialogEliminar").dialog("open");
		break;  
	case 4:
		block();
		$("#verRedictamenForm").submit();  
		break;
	case 5:
		block();
		$("#consultarComentarioForm").submit();  
		break;
	
		
	}    
}
$(function() {
	$("input.numeric").numeric();
	$("#grid").jqGrid(
			{
				url : 'retrieveAclaraciones',
				datatype : "json",
				mtype : 'GET',
				height : 300,
				colNames : [ '', 'Cuenta', 'Caso', 'Folio', 'Fecha Movto.',
						'Importe', 'Importe Comision', 
						'Concepto', 'Tipo Acl.', 'Fecha Preregistro', 'Fecha Entrega',
						'Fecha Res.','Extemporaneo', 'Status', 'StatusValue', '' ],
				colModel : [ {
					name : 'marcame',
					index : 'marcame',
					width : 15,
				},{
					name : 'cuenta',
					index : 'cuenta',
					sorttype : "int",
					align : "right"
				}, {
					name : 'caso',
					index : 'caso',
					sorttype : "int",
					align : "right",
					width: 50
				}, {
					name : 'folio',
					index : 'folio',
					sorttype : "int",
					align : "right",
					width: 80
				}, {
					name : 'fechaMovimiento',
					index : 'fechaMovimiento',
					sorttype : "text",
					align : "right",
					width: 70
				}, {
					name : 'importe',
					index : 'importe',
					sorttype : "currency",
					align : "right"
				}, {
					name : 'importeComision',
					index : 'importeComision',
					sorttype : "currency",
					align : "right"
				}, {
					name : 'concepto',
					index : 'concepto',
					sorttype : "text",
					width: 300
				}, {
					name : 'tipoSolicitud',
					index : 'tipoSolicitud',
					sorttype : "text"
				}, {
					name : 'fechaPreregistro',
					index : 'fechaPreregistro',
					sorttype : "text",
					align : "right",
					width: 70
				}, {
					name : 'fechaEntregaDocs',
					index : 'fechaEntregaDocs',
					sorttype : "text",
					align : "right",
					width: 70
				}, {
					name : 'fechaResolucion',
					index : 'fechaResolucion',
					sorttype : "text",
					align : "right",
					width: 70
				}, {
					name : 'extemporanea',
					index : 'extemporanea',
					sorttype : "text"
				}, {
					name : 'status',
					index : 'status',
					sorttype : "text"
				}, {
					name : 'statusValue',
					index : 'statusValue',
					hidden: true
				}, {
					name : 'index',
					index : 'index',
					hidden: true
				} ],
				ondblClickRow: function(rowId) {
					var rowData = jQuery(this).getRowData(rowId); 
					var index = rowData['index'];
					var cb = document.getElementById("checkboxData"+index);
					cb.checked = true;
		            executeAction(index);
		            
		        },
		        loadui: "block",
		        rowList:[50,100,200, 'All'],
				rowNum : 100,
				pager : '#pager',
				sortname : 'cuenta',
				sortable:true,
				loadonce:true,
				viewrecords : true,
				sortorder : "desc",
				autowidth: true,
				shrinkToFit : true,
				hidegrid : false	
			});    
	$("#grid").jqGrid('navGrid', '#pager', {
		edit : false,
		add : false,
		del : false
	});

	$("#aceptar").button().click(function() {
		block();
		//$("#mainForm").submit();

	});

	$("#dialogComentarios").dialog({
		autoOpen : false,
		height : 280,
		width : 400,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Aceptar : function() {
				block();
				$("#agregarComentarioForm").submit();   	
				  
				$(this).dialog("close");
			},
			Cancelar : function() {
				$(this).dialog("close");
			}
		}
	});
	
	$("#dialogComentariosCliente").dialog({
		autoOpen : true,
		height : 280,
		width : 400,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Aceptar : function() {
				$.ajax({
					
				   	 url : 'hideComentarios'
				      
				  });
				$(this).dialog("close");
			}
		}
	});
	
	$("#dialogDictamen").dialog({
		autoOpen : true,
		height : 280,
		width : 400,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Aceptar : function() {
				$.ajax({
					
				   	 url : 'hideRedictamen'
				      
				  });
				$(this).dialog("close");
			}
		}
	});
	
	$("#dialogEliminar").dialog({
		autoOpen : false,
		height : 200,
		width : 300,  
		position : 'center',
		resizable : false,  
		modal: true,
		buttons : {
			Si : function() {
				block();
				$("#eliminarCasoFolioForm").submit();  
				
				$(this).dialog("close");
			},
			No : function() {
				$(this).dialog("close");
			}
		}
	}); 
	
	$("#dialogValidacion").dialog({
		autoOpen : false,
		height : 200,
		width : 300,  
		position : 'center',
		resizable : false,  
		modal: true,
		buttons : {
			Aceptar : function() {
				$(this).dialog("close");
			}
		}
	});   

	$("#dialogCasoBorrar").dialog({
		autoOpen : false,
		height : 200,
		width : 300,  
		position : 'center',
		resizable : false,  
		modal: true,
		buttons : {
			Aceptar : function() {
				block();
				$("#eliminarCasoFolioForm").submit();  
				
				$(this).dialog("close");
			}  
		}  
	});
	
	$("#dialogOpcionDeshabilitada").dialog({
		autoOpen : false,
		height : 200,
		width : 350,  
		position : 'center',
		resizable : false,  
		modal: true,
		buttons : {
			Aceptar : function() {
				$(this).dialog("close");
			}
		}
	});
	
	$("#error").dialog({
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
	
	$("#respuestaComentario").dialog({
		autoOpen : true,
		height : 150,
		width : 280,
		position : 'center',
		modal: true,
		resizable : false,
		buttons : {
			Cerrar : function() {
				$(this).dialog("close");
			}
		}
	});

	  
});
   
function optionCheck() {
	var e = document.getElementById("combobox");
	var index = e.selectedIndex;
	switch (index) {
	case 1: //ver Detalles
		window.location.href = "verDetalle";
//		var myGrid = $('#grid'), 
//	    selRowId = myGrid.jqGrid ('getRowData', 'selrow');
//	    //celValue = myGrid.jqGrid ('getCell', selRowId, 'cuenta');
//		alert("Select Row:" + selRowId.length );//+", celValue:" + celValue);
		break;    
	case 2: // Agregar Comentarios  
		$("#dialogComentarios").dialog("open");
		break;
	case 3: // Eliminar Caso/Folio
		$("#dialogEliminar").dialog("open");
		break;  
		
	}    

	// alert(index);  
};

