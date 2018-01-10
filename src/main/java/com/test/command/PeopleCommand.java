package com.test.command;



/**
 * This is a simple POJO command
 * @author chidalgo
 *
 */
public class PeopleCommand {

	
	
	public PeopleCommand() {
		
	}
	
	public boolean isShowRespuesta() {
		return showRespuesta;
	}

	public void setShowRespuesta(boolean showRespuesta) {
		this.showRespuesta = showRespuesta;
	}

	public String getRespuesta() {
		return respuesta;
	}

	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}
	
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}



	private boolean showRespuesta;
	private String respuesta;
	private String message;
	

}
