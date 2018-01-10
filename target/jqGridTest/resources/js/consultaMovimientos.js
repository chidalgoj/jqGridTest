function init(){
	unBlock(); 
	$("#consultarPor").focus();	
};
$(function() {
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
	
	errorDialog = $("#jsError").dialog({
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
	
	$("#grid").jqGrid({
		url:'retrieveMovimientos',
		datatype : "json",
		mtype: 'GET',
		height : 300,
		colNames : ['', 'Fecha', 'Importe', 'Concepto', 'Status Aclara', 'Referencia', 'F. Valor', '' ],
		colModel : [ {
			name : 'marcame',
			index : 'marcame', 
			sorttype : "boolean",
			formatter: "checkbox", 
			width: 20
		}, {
			name : 'fecha',
			index : 'fecha', 
			sorttype : "date"
		}, {
			name : 'importe',
			index : 'importe',
			sorttype : "currency"
		}, {
			name : 'concepto',
			index : 'concepto',
			sorttype : "text"
		}, {
			name : 'status',
			index : 'status',
			sorttype : "text"
		} , {
			name : 'referencia',
			index : 'referencia',
			sorttype : "text"
		} , {
			name : 'fvalor',
			index : 'fvalor',
			sorttype : "text"
		} , {
			name : 'multiple',
			index : 'multiple',
			hidden:true
		} ],
		  loadui: "block",  
		  rowNum:100,
	      rowList:[50,100,200, 'All'],
	      pager: '#pager',
	      sortname: 'fecha', 
	      viewrecords: true, 
	      sortorder: "desc",
	      loadonce:true,
		  autowidth: true,
	      shrinkToFit : true,
	      hidegrid: false,
	      ondblClickRow: function(id){ 
	    	  var rowData = $('#grid').jqGrid('getRowData', id);
	    	  var importe = rowData.importe;
	    	 
	    	  if(rowData.status==""){
	    	  
		    	  if(importe>0){
		    		  if(rowData.marcame == "No"){
		    			  rowData.marcame = "Yes";
		    		  } 
		    		  else{
		    			  rowData.marcame = "No";
		    		  }
		    		  $('#grid').jqGrid('setRowData', id, rowData);
	//	    		  $.ajax({
	//				    	 url : 'updateSeleccionado?row='+id+"&add"+rowData.marcame
	//			            
	//			        });
		    	  }
		    	  else{
		    		  $("#jsErrorMessage").text("No se puede seleccionar...");
		    		  errorDialog.dialog("open");
		    		  
		    	  }
	    	 	  
	    	  }
	    	  else{
	    		  $("#jsErrorMessage").text("No se puede seleccionar...");
	    		  errorDialog.dialog("open");
	    		  
	    	  }
	    	 
	       }
	  });
	  $("#grid").jqGrid('navGrid','#pager',{edit:false,add:false,del:false});

	  $( "#listaConfirmacion" )
	  .button() 
	  .click(function() {
		  var selectedRows = [];
		  var rows = jQuery("#grid").getDataIDs();
		  var multiple = true;
		  for(i=0;i<rows.length;i++)
		  {
			  row=jQuery("#grid").getRowData(rows[i]);
			  if(row.marcame == "Yes"){
				  selectedRows.push(rows[i]);
				  if(row.multiple != '998'){
		   			 multiple = false;
		   		  }
	   		  } 
			  
	   		 

		  }
		  if(multiple){
			  $.ajax({
			    	 url : 'updateSeleccionados?selectedRows='+selectedRows
		            
		        });  
			  $( "#dialogMultiples" ).dialog( "open" );
			  unBlock(); 
    		  return false;
		  }
		  else{
			  if(selectedRows.length == 0){
				  $("#jsErrorMessage").text("Favor seleccionar un registro en Consulta de movimientos");
	    		  errorDialog.dialog("open");
	    		  unBlock(); 
	    		  return false;
			  }
			  $.ajax({
			    	 url : 'updateSeleccionados?selectedRows='+selectedRows
		            
		        });  
		  }
		 
		    
		  
		  
	  });
	  
	  $( "#dialogMultiples" ).dialog({
		  autoOpen : false,
		  resizable: false,
	      height: "auto",
	      width: 300,
	      modal: true,
	      buttons: {
	        "Si": function() {
	          $( this ).dialog( "close" );
	          block();
	          window.location.href = "list";	
				
	        },
	        "No": function() {
	          $( this ).dialog( "close" );
	          $( "#dialogLlamarFraudes" ).dialog( "open" );
	          return false;
	        }
	      }

	    });

	  $( "#dialogLlamarFraudes" ).dialog({
		  autoOpen : false,
		  resizable: false,
	      height: "auto",
	      width: 300,
	      modal: true,
	      buttons: {
	        "Aceptar": function() {
	        	$( this ).dialog( "close" );
		          return false;
	        }
	      }

	    });

	  
});



function init(){
	//document.getElementById("fechasDiv").className = "current-hidden";
	optionCheck();
};

function optionCheck(){
    var option = document.getElementById("consultarPor").value;
    var mesDiv =  document.getElementById("mesDiv");
    var fechasDiv = document.getElementById("fechasDiv");
    if(option == 1){
        mesDiv.className = "current-visible";
        fechasDiv.className = "current-hidden";
    }
    if(option == 2){
   		mesDiv.className = "current-hidden";
        fechasDiv.className = "current-visible";
        
    }
    if(option == 3){
        mesDiv.className = "current-hidden";
        fechasDiv.className = "current-hidden";
    }
};

$(function() {
     $( "#fechaInicial" ).datepicker({ dateFormat: "dd/mm/yy", firstDay: 1, changeYear: true });
     $( "#fechaFinal" ).datepicker({ dateFormat: "dd/mm/yy", firstDay: 1, changeYear: true });
 });