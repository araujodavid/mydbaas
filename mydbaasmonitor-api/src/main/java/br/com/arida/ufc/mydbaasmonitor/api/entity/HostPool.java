package main.java.br.com.arida.ufc.mydbaasmonitor.api.entity;

import java.util.List;
import main.java.br.com.arida.ufc.mydbaasmonitor.api.entity.common.AbstractPool;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.resource.Host;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.resource.VirtualMachine;

/**
 * @author Daivd Araújo - @araujodavid
 * @version 1.0
 * @since April 28, 2013
 */

public class HostPool extends AbstractPool<Host> {

	@Override
	public boolean save(Host resource) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Host resource) {
		// TODO Auto-generated method stub
		return false;
	}
	
	public List<VirtualMachine> getMachines(int hostId) {
		//TODO
		return null;
	}

}
