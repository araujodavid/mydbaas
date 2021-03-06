/* Network */
var lastNetworkBytesSent = 0.0;
var lastNetworkBytesReceived = 0.0;
var lastNetworkPacketsSent = 0.0;
var lastNetworkPacketsReceived = 0.0;

/* Disk */
var lastDiskReads = 0.0;
var lastDiskWrites = 0.0;
var lastDiskBytesRead = 0.0;
var lastDiskBytesWritten = 0.0;

$(document).ready(function() {
	Highcharts.setOptions({
        global: {
            useUTC: false
        }
	});
	
	var defaultOptions1 = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                    	var series = this.series[0];
                        
                        setInterval(function() {
                            var current_time = undefined;
                            var y1 = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "HostDomains", metricType:"host", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
	                            current_time = data[0].recordDate;
	                            
	                          	y1 = parseFloat(data[0].hostDomainsActive);
		                        
		                        series.addPoint([y1], true, true);
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Amount'
                },
                min: 0, 
                max: 20,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
            	formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.y + " domains";
            	}
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Active Domains',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,1,1,1,1,1],
                color: '#3CB371'
            }]
        };
	
	var defaultOptions2 = {
			chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                    	var series = this.series[0];
                        
                        setInterval(function() {
                            var current_time = undefined;
                            var y1 = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "HostDomains", metricType:"host", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
	                            current_time = data[0].recordDate;
	                            
	                          	y1 = parseFloat(data[0].hostDomainsInactive);
		                        
		                        series.addPoint([y1], true, true);
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Amount'
                },
                min: 0, 
                max: 20,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
            	formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.y + " domains";
            	}
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Inactive Domains',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [1,1,0,0,0,0,0],
                color: '#f70217'
            }]
        };
	
	var defaultOptions3 = {
			chart: {
                type: 'spline',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        
                        setInterval(function() {
                            var current_time = undefined;
                            var y1 = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Cpu", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
                            	var total = 0;
                            	
                            	for (var i = 0; i < data.length; i++) {
                            		total = total + data[i].cpuCombined;
                            	}
                            	
                            	current_time = data[0].recordDate;
	                            
	                          	y1 = parseFloat(Math.round(total/data.length*100)/100);
		                        
		                        series.addPoint([y1], true, true);
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Percentage',
                },
                min: 0, 
                max: 100,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                	return '<b>'+ this.series.name +'</b><br/>'+
                    this.y + "%";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'CPU Utilization',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [5,4.4,6,7,2,2,4],
                color: '#fa9214'
            }]
        };
	
	
	var defaultOptions4 = {
            chart: {
                type: 'area',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        var series2 = this.series[1];

                        
                        setInterval(function() {
                            var current_time = undefined;
                            var y1 = undefined;
                            var y2 = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Memory", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
	                            current_time = data[0].recordDate;
	                            
	                          	y1 = parseFloat(data[0].memoryUsedPercent);
	                          	y2 = parseFloat(data[0].memorySwapUsedPercent);
		                        
		                        series.addPoint([y1], true, true);
		                        series2.addPoint([y2], true, true);
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Percentage',
                },
                min: 0, 
                max: 100,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.y + " %";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Memory Percent',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [30,23,5,0,6,0,11],
                color: '#5E2D79'
            },{
                name: 'Swap Percent',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [1,0,3,0,0,0,0],
                color: '#008000'
            }]
        };
	
	
	var defaultOptions5 = {
            chart: {
                type: 'area',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        var series2 = this.series[1];

                        
                        setInterval(function() {
                            var networkBytesSent = 0.0;
                            var networkBytesReceived = 0.0;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Network", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id }, function(data) {
                            	networkBytesSent = parseFloat(data[0].networkBytesSent);
                            	networkBytesReceived = parseFloat(data[0].networkBytesReceived);
	                          	                        
		                        series.addPoint([networkBytesSent-lastNetworkBytesSent], true, true);
		                        lastNetworkBytesSent = networkBytesSent;
		                        series2.addPoint([networkBytesReceived-lastNetworkBytesReceived], true, true);
		                        lastNetworkBytesReceived = networkBytesReceived; 
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Bytes',
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.y + " bytes";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Bytes Sent',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [24488,21458,19455,9455,23001,19455,15357],
            	color: '#EE1D00'
            },{
                name: 'Bytes Received',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [13596,12001,18223,8595,13596,19332,11196],
            	color: '#2D7DB3'
            }]
        };
	
	
	var defaultOptions6 = {
            chart: {
                type: 'area',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        var series2 = this.series[1];

                        
                        setInterval(function() {
                            var networkPacketsSent = 0.0;
                            var networkPacketsReceived = 0.0;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Network", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id }, function(data) {
                            	networkPacketsSent = parseFloat(data[0].networkPacketsSent);
                            	networkPacketsReceived = parseFloat(data[0].networkPacketsReceived);
	                          	                        
		                        series.addPoint([networkPacketsSent-lastNetworkPacketsSent], true, true);
		                        lastNetworkPacketsSent = networkPacketsSent;
		                        series2.addPoint([networkPacketsReceived-lastNetworkPacketsReceived], true, true);
		                        lastNetworkPacketsReceived = networkPacketsReceived; 
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Packets',
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.y + " packets";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Packets Sent',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [115,448,231,123,334,70,283],
            	color: '#EE1D00'
            },{
                name: 'Packets Received',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [221,290,448,109,502,331,263],
            	color: '#2D7DB3'
            }]
        };
	
	
	var defaultOptions7 = {
            chart: {
                type: 'area',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        var series2 = this.series[1];

                        
                        setInterval(function() {
                            var diskReads = 0.0;
                            var diskWrites = 0.0;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Disk", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id }, function(data) {
                            	diskReads = parseFloat(data[0].diskReads);
                            	diskWrites = parseFloat(data[0].diskWrites);

		                        series.addPoint([diskReads-lastDiskReads], true, true);
		                        lastDiskReads = diskReads;
		                        series2.addPoint([diskWrites-lastDiskWrites], true, true);
		                        lastDiskWrites = diskWrites; 
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Requests',
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.y + " requests";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Reads',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,0,0,0,0,0]
            },{
                name: 'Writes',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,0,0,0,0,0]
            }]
        };


	var defaultOptions8 = {
            chart: {
                type: 'area',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function() {
                        var series = this.series[0];
                        var series2 = this.series[1];

                        
                        setInterval(function() {
                            var diskBytesRead = 0.0;
                            var diskBytesWritten = 0.0;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Disk", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id }, function(data) {
                            	diskBytesRead = parseFloat(data[0].diskBytesRead);
                            	diskBytesWritten = parseFloat(data[0].diskBytesWritten);

		                        series.addPoint([diskBytesRead-lastDiskBytesRead], true, true);
		                        lastDiskBytesRead = diskBytesRead;
		                        series2.addPoint([diskBytesWritten-lastDiskBytesWritten], true, true);
		                        lastDiskBytesWritten = diskBytesWritten; 
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Bytes',
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.y + " bytes";
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Bytes Read',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,0,0,0,0,0]
            },{
                name: 'Bytes Written',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,0,0,0,0,0]
            }]
        };
	
	
	var defaultOptions9 = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                    	var series = this.series[0];
                        
                        setInterval(function() {
                            var current_time = undefined;
                            var y1 = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Disk", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
	                            current_time = data[0].recordDate;
	                            
	                          	y1 = parseFloat(data[0].diskPercent);
		                        
		                        series.addPoint([y1], true, true);
                          	});
                            
                        }, 5000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                pointStart: Date.now()
            },
            yAxis: {
                title: {
                    text: 'Percentage'
                },
                min: 0, 
                max: 100,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
            	formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.y + " %";
            	}
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Percentage Used',
                pointStart: Date.now(),
                pointInterval: 6000,
                data: [0,0,0,0,0,0,0],
                color: '#F01125'
            }]
        };
	
	var defaultOptions10 = {
            chart: {
                type: 'bar',
                animation: false,
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                    	var series = this.series[0];
                    	var series2 = this.series[1];
                    	var series3 = this.series[2];
                        
                        setInterval(function() {
                            var current_time = undefined;
                            var diskFree = undefined;
                            var diskUsed = undefined;     
                            var diskTotal = undefined;

                            var resource_id = parseInt($("#resource_id_chart").val());
                            
                            $.post('http://localhost:8080/mydbaasmonitor/metric/single', {metricName : "Disk", metricType:"machine", resourceType:"host", queryType: 1, resourceID: resource_id },function(data) {
	                            current_time = data[0].recordDate;
	                            
	                          	diskFree = parseFloat(data[0].diskFree);
	                          	
	                          	diskUsed = parseFloat(data[0].diskUsed);
	                          	
	                          	diskTotal = parseFloat(data[0].diskTotal);

	                          	series.addPoint([diskFree],true,true);
	                          	series2.addPoint([diskUsed],true,true);
	                          	series3.addPoint([diskTotal],true,true);
	                          	
                          	});
                            
                        }, 15000);
                    }
                }
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
            	labels:
                {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'GB'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
            	formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.y + " GB";
            	}
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Disk Free',
                pointStart: Date.now(),
                pointInterval: 15000,
                data: [0]
            },
            {
                name: 'Disk Used',
                pointStart: Date.now(),
                pointInterval: 15000,
                data: [0]
            },{
                name: 'Disk Total',
                pointStart: Date.now(),
                pointInterval: 15000,
                data: [0]
            }]
        };
	
	$('#container1').highcharts(defaultOptions1);
	$('#container2').highcharts(defaultOptions2);
	$('#container3').highcharts(defaultOptions3);
	$('#container4').highcharts(defaultOptions4);
	$('#container5').highcharts(defaultOptions5);
	$('#container6').highcharts(defaultOptions6);
	$('#container7').highcharts(defaultOptions7);
	$('#container8').highcharts(defaultOptions8);	
	$('#container9').highcharts(defaultOptions9);
	$('#container10').highcharts(defaultOptions10);		
});          
            
            