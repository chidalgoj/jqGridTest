<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ page session="false" %>
<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center bgColor=#ffffff border=0
background="resources/images/logoBg.png">
  <TBODY>
  <TR>
    <TD width=160><IMG height=58 alt="" src="resources/images/banamexLogo.png"
      width=160 border=0></TD>
    <TD align="center">ATENCION ESPECIALIZADA DE ACLARACIONES</TD>
    <TD align="right" class="version"><spring:eval expression="@propertyConfigurer.getProperty('build.date')" /></TD>
	</TR>
	
	</TBODY>
</TABLE>
