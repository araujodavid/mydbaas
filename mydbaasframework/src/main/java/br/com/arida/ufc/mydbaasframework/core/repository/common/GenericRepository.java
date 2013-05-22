package main.java.br.com.arida.ufc.mydbaasframework.core.repository.common;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import main.java.br.com.arida.ufc.mydbaasframework.common.resource.common.AbstractEntity;

/**
 * This interface is for a base Repository CRUD.
 * This interface uses generic parameters to create a Repository for a specific entity.
 * Basic methods for manipulating an object persisted.
 *  
 * @author David Araújo - @araujodavid
 * @version 1.0
 * @since May 22, 2013
 */
public interface GenericRepository<T extends AbstractEntity> {

	public List<T> all();
	
	public T find(Integer id);
	
	public void remove(T resource);
	
	public void save(T resource);
	
	public void update(T resource);
	
	public T getEntity(ResultSet resultSet) throws SQLException;
}
