function init(isMultiple){
	unBlock(); 
	if(isMultiple){
		$("#grid").jqGrid('showCol', ["veinte","cincuenta","cien","doscientos","quinientos","mil"]);
		$("#grid").setLabel('importeCorrecto', 'Importe Solicitado');
		$("#grid").setLabel('importeDevolucion', 'Importe Entregado');
	}
	else{
		$("#grid").jqGrid('hideCol', ["veinte","cincuenta","cien","doscientos","quinientos","mil"]);
		$("#grid").setLabel('importeCorrecto', 'Importe Correcto');
		$("#grid").setLabel('importeDevolucion', 'Importe Devolucion');
	}
	
};
function validateForm(){
	return false;
};


function validateNumeric(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode!=46) {
        return false;
    }
    return true;
}

function reconoceValueChange(index, cb) {
	
	$.ajax({
		
	   	 url : 'updateReconoce?index='+index+'&value='+cb.value
	      
	  });
};

function cambiaMovimiento(index, input, field) {
	
	$.ajax({
		
	   	 url : 'updateMovimiento?index='+index+'&value='+input.value+'&field='+field
	      
	  });
};


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

//	$("#billetesDialog").dialog({
//		autoOpen : true,
//		height : 250,
//		width : 380,
//		position : 'center',
//		resizable : false,
//		modal: true,
//		buttons : {
//			Calcula : function() {
//				var importeDevolucion = $("#grid").getRowData(1).importeDevolucion;
//				var total = 0;
//				total = 500*$("#quinientos").val()+200*$("#doscientos").val()+100*$("#cien").val()+50*$("#cincuenta").val()+20*$("#veinte").val();
//				if(total>importeDevolucion){
//					$("#jsErrorMessage").text("La suma de denominaciones excede el monto entregado de : "+importeDevolucion);
//					$("#jsError").dialog("open");
//				}
//				else{
//					$( "#quinientos" ).prop( "disabled", true );
//					$( "#doscientos" ).prop( "disabled", true );
//					$( "#cien" ).prop( "disabled", true );
//					$( "#cincuenta" ).prop( "disabled", true );
//					$( "#veinte" ).prop( "disabled", true );
//				}
//				
//				
//			},
//			Aceptar : function() {
//				var importeDevolucion = $("#grid").getRowData(0).importeDevolucion;
//				var total = 0; 
//				total = 500*$("#quinientos").val()+200*$("#doscientos").val()+100*$("#cien").val()+50*$("#cincuenta").val()+20*$("#veinte").val();
//				if(total>importeDevolucion){
//					$("#jsErrorMessage").text("La suma de denominaciones excede el monto entregado de : "+importeDevolucion);
//					$("#jsError").dialog("open");
//				}
//				else{ 
//					$.ajax({
//						
//					   	 url : 'calculaBilletes?quinientos='+$("#quinientos").val()+'&doscientos='+$("#doscientos").val()+'&cien='+$("#cien").val()+'&cincuenta='+$("#cincuenta").val()+'&veinte='+$("#veinte").val()
//					      
//					  });
//				}
//				$(this).dialog("close");
//			},
//			Corregir : function() {
//				$( "#quinientos" ).prop( "disabled", false );
//				$( "#doscientos" ).prop( "disabled", false );
//				$( "#cien" ).prop( "disabled", false );
//				$( "#cincuenta" ).prop( "disabled", false );
//				$( "#veinte" ).prop( "disabled", false );
//				
//			},
//			Cancelar : function() {
//				$(this).dialog("close");
//			}
//		}
//	});

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
	$("#dialogConfirma").dialog({
		autoOpen : false,
		height : 170,
		width : 200,  
		position : 'center',
		resizable : false, 
		modal: true,
		buttons : {
			Si : function() {
				 
				var multiple = true;
				var rows = $("#grid").getDataIDs();
				  
				var importeDevolucion = 0;
				var total = 0; 
				
			    for(i=0;i<rows.length;i++)
			    {
				  row=$("#grid").getRowData(rows[i]);
				  importeDevolucion += parseInt(row.importeDevolucion);
				  total += 500*parseInt(row.quinientos)+200*parseInt(row.doscientos)+100*parseInt(row.cien)+50*parseInt(row.cincuenta)+20*parseInt(row.veinte);
				  if(row.multiple != '998'){
			   		multiple = false;
			   		  
		   		  } 

			    } 
				
			    if(multiple){
			    	for(i=0;i<rows.length;i++)
				    {
				    	row=$("#grid").getRowData(rows[i]);
				    	if(row.importeDevolucion ==0){
				    		$(this).dialog("close");
				    		$("#jsErrorMessage").text("El Importe Entregado debe ser mayor a 0");
							$("#jsError").dialog("open");
							return false;
				    	}
				    }
			    }
			    
				if(multiple && (total!=importeDevolucion)){
					$(this).dialog("close");
					$("#jsErrorMessage").text("La suma de denominaciones debe ser igual al monto entregado : "+importeDevolucion);
					$("#jsError").dialog("open");
					return false;
				}
				else{ 
					block();
					$("#preRegistroForm").submit();
				}
				
				
				
				$(this).dialog("close");
			},
			No : function() {
				$(this).dialog("close");
			}
		}
	}); 
	$("#comentarios").button().click(function() {
		$("#dialogComentarios").dialog("open");
		return false;
	});
	$("#contacto").button().click(function() {
		$("#contactoDialog").dialog("open");
		return false;
	});
	$("#aceptar").button().click(function() {
		$("#dialogConfirma").dialog("open");
		return false;
	});

	$("#contactoDialog").dialog({
		autoOpen : false,
		height : 210,
		width : 280,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Aceptar : function() {
				block();
				$("#contactoDialogForm").submit();   
				
				$(this).dialog("close");
			},
			Cancelar : function() {
				$(this).dialog("close");
			}
		}
	});

	$("#respuestaDialog").dialog({
		autoOpen : true,
		height : 'auto',
		width : 500,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Cerrar : function() {
				block(); 
				$("#backForm").submit();
				$(this).dialog("close");
			}
		}
	});
	
	$("#respuestaOAD").dialog({
		autoOpen : true,
		height : 280,
		width : 400,
		position : 'center',
		resizable : false,
		modal: true,
		buttons : {
			Cerrar : function() {
				
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
	
	$("#jsError").dialog({
		autoOpen : false,
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
