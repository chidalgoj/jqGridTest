<!DOCTYPE html>
<%@ page session="false" %>
<%@taglib uri="/WEB-INF/spring-form.tld" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<title>Lista de Confirmacion</title>
<link href="resources/css/listaRedictaminacion.css" rel="stylesheet">
<%@include file="/WEB-INF/jsp/incl/head.jsp"%>

<script src="resources/js/listaRedictaminacion.js" type="text/javascript"></script>

</head>
<body onload="init()">
	<%@include file="/WEB-INF/jsp/incl/menu.jsp"%>
	<%@include file="/WEB-INF/jsp/incl/cuenta.jsp"%>
	<c:if test="${not empty command.message}">
		<div id="error" title="Error">
		<label>${command.message}</label>
		</div>
    </c:if>
	<form:form method="POST" action="listaRedictaminacionPost" onsubmit="return validateForm();"
	id="mainForm">
	<div align="center"> 
	<h1>Reactivacion para Redictamen</h1>
	</div>
	<div align="center">
		
		<div id="listaRedictaminacionTable" align="center">	
				<table id="grid"></table>
		</div> 
		<div id="pager"></div>
	    <button id="redictaminacion">Redictaminacion</button>
		<button id="aceptar">Aceptar</button>
	</div>
	



</form:form>
<c:if test="${command.showRespuesta}">
<div id="respuestaDialog" title="Respuesta" >
	<label id="respuestaLabel">${command.respuesta}</label>
	
</div>
</c:if>
</body>
</html>