<!DOCTYPE html>
<%@ page session="false" %>
<%@taglib uri="/WEB-INF/spring-form.tld" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<title>People</title>
<link href="resources/css/people.css"
	rel="stylesheet">
<%@include file="/WEB-INF/jsp/incl/head.jsp"%>

<script src="resources/js/people.js"
	type="text/javascript"></script>
</head>
<body>
	<c:if test="${not empty command.message}">
		
		<div id="message" title="Message">
		<label>${command.message}</label>
		</div>

	
     
    </c:if>
	<form:form method="POST" action="listPost"
		htmlEscape="true" id="listForm">
		<div align="center">
			<h1>People</h1>
		</div>
		<div align="center">
			
			<div id="peopleTable" class="peopleTable" align="center">
				<table id="grid"></table>
			</div>
			<div id="pager"></div>
			<button id="ok">OK</button>
		</div>




	</form:form>

	
		
		
</body>
</html>