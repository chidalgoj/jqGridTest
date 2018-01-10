<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ page session="false" %>
<div id="menu-h">
	<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center
		bgColor=#ffffff border=0 background="resources/images/logoBg.png">
		<TBODY>
			<TR>
				<TD width=160><IMG height=58 alt=""
					src="resources/images/banamexLogo.png" width=160 border=0></TD>
				<TD id="menuTD"> 
					<div id="menuDIV" style="margin:auto;">
						<ul id="menu-horizontalCompacto" class="menu-horizontal">
							<li><a href="capturaCuenta">Captura Cuenta</a></li>
							<li><a href="#">Reconexion</a></li>
							<li><a href="#">Ayuda</a></li>
							<li><a href="cerrarSesion">Cerrar Sesión</a></li>
						</ul>
					</div>
				</TD> 
				 <TD align="right" class="version"><spring:eval expression="@propertyConfigurer.getProperty('build.date')" /></TD>
			</TR>

		</TBODY>
	</TABLE>
</div>

