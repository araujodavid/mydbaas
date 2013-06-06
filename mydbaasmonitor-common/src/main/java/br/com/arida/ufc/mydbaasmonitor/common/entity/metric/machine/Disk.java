package main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.metric.machine;

import java.util.List;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import main.java.br.com.arida.ufc.mydbaasmonitor.common.entity.metric.common.AbstractMetric;

/** 
 * @author Daivd Araújo - @araujodavid
 * @version 2.0
 * @since March 13, 2013 
 */
public class Disk extends AbstractMetric {

	private long diskBytesRead;
	private long diskBytesWritten;
	private long diskReads;
	private long diskWrites;
	private long diskFreeBytes;
	private long diskUsedBytes;
	private long diskTotalBytes;
	private double diskPercent;
		
	public long getDiskBytesRead() {
		return diskBytesRead;
	}

	public void setDiskBytesRead(long diskBytesRead) {
		this.diskBytesRead = diskBytesRead;
	}

	public long getDiskBytesWritten() {
		return diskBytesWritten;
	}

	public void setDiskBytesWritten(long diskBytesWritten) {
		this.diskBytesWritten = diskBytesWritten;
	}

	public long getDiskReads() {
		return diskReads;
	}

	public void setDiskReads(long diskReads) {
		this.diskReads = diskReads;
	}

	public long getDiskWrites() {
		return diskWrites;
	}

	public void setDiskWrites(long diskWrites) {
		this.diskWrites = diskWrites;
	}

	public long getDiskFreeBytes() {
		return diskFreeBytes;
	}

	public void setDiskFreeBytes(long diskFreeBytes) {
		this.diskFreeBytes = diskFreeBytes;
	}

	public long getDiskUsedBytes() {
		return diskUsedBytes;
	}

	public void setDiskUsedBytes(long diskUsedBytes) {
		this.diskUsedBytes = diskUsedBytes;
	}

	public long getDiskTotalBytes() {
		return diskTotalBytes;
	}

	public void setDiskTotalBytes(long diskTotalBytes) {
		this.diskTotalBytes = diskTotalBytes;
	}

	public double getDiskPercent() {
		return diskPercent;
	}

	public void setDiskPercent(double diskPercent) {
		this.diskPercent = diskPercent;
	}

	@Override
	public String toString() {
		return "machine";
	}

	@Override
	public List<Disk> jsonToList(String json) {
		Gson gson = new Gson();
		List<Disk> diskList = gson.fromJson(json, new TypeToken<List<Disk>>(){}.getType());
		return diskList;
	}
}
