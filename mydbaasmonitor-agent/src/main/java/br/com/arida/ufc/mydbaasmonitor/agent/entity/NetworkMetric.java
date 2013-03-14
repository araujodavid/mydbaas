package main.java.br.com.arida.ufc.mydbaasmonitor.agent.entity;

import java.util.Properties;
import main.java.br.com.arida.ufc.mydbaasmonitor.agent.entity.common.LoadMetric;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.Network;

/**
 * 
 * @author Daivd Araújo
 * @version 2.0
 * @since March 13, 2013
 * 
 */

public class NetworkMetric extends Network implements LoadMetric {
	
	private static NetworkMetric uniqueInstance;
	
	private NetworkMetric() {}

	public static NetworkMetric getInstance() {
		if (uniqueInstance == null) {
			uniqueInstance = new NetworkMetric();
	    }
	    return uniqueInstance;
	}

	@Override
	public void loadMetricProperties(Properties properties) {
		this.setUrl(properties.getProperty("geral.url")+properties.getProperty("net.url"));
		this.setCyclo(Integer.parseInt(properties.getProperty("net.cycle")));		
	}

}
