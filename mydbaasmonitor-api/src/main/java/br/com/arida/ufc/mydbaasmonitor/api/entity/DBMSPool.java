package main.java.br.com.arida.ufc.mydbaasmonitor.api.entity;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import main.java.br.com.arida.ufc.mydbaasmonitor.api.entity.common.AbstractPool;
import main.java.br.com.arida.ufc.mydbaasmonitor.api.util.SendResquest;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.resource.DBMS;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.resource.Database;

/**
 * @author Daivd Araújo - @araujodavid
 * @version 3.0
 * @since April 28, 2013
 */

public class DBMSPool extends AbstractPool<DBMS> {

	@Override
	public boolean save(DBMS resource) {
		List<NameValuePair> params = null;
		HttpResponse response;
		try {
			params = loadRequestParams(resource);
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		}
		
		try {
			response = SendResquest.postRequest(this.getClient().getServerUrl()+"/resource/dbmss/add", params);
			if (response.getStatusLine().getStatusCode() != 202) {
				EntityUtils.consume(response.getEntity());
				return true;
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean update(DBMS resource) {
		List<NameValuePair> params = null;
		HttpResponse response;
		try {
			params = loadRequestParams(resource);
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		}
		
		try {
			response = SendResquest.postRequest(this.getClient().getServerUrl()+"/resource/dbmss/update", params);
			if (response.getStatusLine().getStatusCode() != 202) {
				EntityUtils.consume(response.getEntity());
				return true;
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public List<Database> getDatabases(DBMS resource) {
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("identifier", String.valueOf(resource.getId())));
		HttpResponse response;
		String json = null;
		try {
			response = SendResquest.postRequest(this.getClient().getServerUrl()+"/resource/databases", params);
			json = SendResquest.getJsonResult(response);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();
		List<Database> databases = gson.fromJson(json, new TypeToken<List<Database>>(){}.getType());
		return databases;
	}

}
