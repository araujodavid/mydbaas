package main.java.br.com.arida.ufc.mydbaasmonitor.core.controller.web.common;

import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

/**
 * Abstract class for new Controllers
 * @author David Araújo
 * @version 1.0
 * @since March 20, 2013
 */
public abstract class AbstractController {

	protected Result result;
	protected Validator validator;
	
	/**
	 * Default constructor for Controller
	 * @param result
	 * @param validator
	 */
	public AbstractController(Result result, Validator validator) {
		this.result = result;
		this.validator = validator;
	}
}
