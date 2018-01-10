package com.test.controller;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.bo.People;
import com.test.response.PeopleResponse;


@Controller
@Scope("session")
public class ListController {

	
	@Autowired
	@Value("${peopleData}")
	private String peopleData;
	
	protected ArrayList<People> people;
	
	
	
	@RequestMapping(value = "/retrievePeople", method = RequestMethod.GET)
	public @ResponseBody PeopleResponse retrieveCargosConfirmacion() {
		
		 
		PeopleResponse response = new PeopleResponse();
		response.setRows(loadPeople());
		return response;
	} 
 

	private Collection<People> loadPeople() {
		ArrayList<People> l = new ArrayList<People>();
		StringTokenizer st1 = new StringTokenizer(peopleData,"/");
		while(st1.hasMoreTokens()){
			StringTokenizer st2 = new StringTokenizer(st1.nextToken(),",");
			People p = new People();
			p.setFirstName(st2.nextToken());
			p.setLastName(st2.nextToken());
			p.setSex(st2.nextToken());
			p.setCivilStatus(st2.nextToken());
			p.setAge(st2.nextToken());
			p.setCountry(st2.nextToken());
			p.setEmail(st2.nextToken());
			l.add(p);
		}
		return l;
	}


	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(ModelMap model) throws RemoteException, Exception {
		
		return "list";
	}

	

	
	
	@RequestMapping(value = "/listPost", method = RequestMethod.POST)
	public String listPost(ModelMap model) throws RemoteException, Exception {
		
		return "list"; 
	}

	
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
    public @ResponseBody
    String edit(HttpServletRequest request) throws Exception  {
		
		//Lets do somthing here when data change
		
        return "list";
    }
	
	
	
}
