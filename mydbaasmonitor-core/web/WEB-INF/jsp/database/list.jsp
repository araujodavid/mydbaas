<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Language" content="pt-br" />
		
		<link href="${pageContext.servletContext.contextPath}/css/bootstrap.css" rel="stylesheet">
		<style type="text/css">
      		body {
        		padding-top: 60px;
        		padding-bottom: 40px;
      		}
      		.sidebar-nav {
        		padding: 9px 0;
      		}
    	</style>
    	
    	<link href="${pageContext.servletContext.contextPath}/css/bootstrap-responsive.css" rel="stylesheet">		

		<title>MyDBaaSMonitor - List of Databases</title>
	</head>
	<body>
		
		<%@include file="/static/menu.jsp"%>
		
		<div class="container-fluid">
    		<div class="row-fluid">
        		<div class="span3" style="margin-top:10px;">
        			<div align="left">
        				<a class="btn btn-inverse" href="${pageContext.servletContext.contextPath}/databases/new" title=""><i class="icon-plus icon-white"></i> Database</a>
        			</div>
        			<c:choose>
        				<c:when test="${databaseList.isEmpty() || databaseList == null}">
        					<div class="alert" style="margin-top:30px;">
								<button type="button" class="close" data-dismiss="alert">&times;</button>
								Databases status graphs <strong>offline</strong>.
							</div>
        				</c:when>
        				<c:otherwise>     
		        			<div id="container-summary" style="margin-top:20px;"></div>
						</c:otherwise>
        			</c:choose>      		     			
        		</div><!--/span-->
        		
        		<div class="span9">
        		
        			<c:if test="${notice != null}">							
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
							${notice}
						</div>		  				
	  				</c:if>
        		
        			<legend>
        				<img src="/mydbaasmonitor/img/table.png"> <strong>List of Databases</strong>
        			</legend>
        			
        			<div class="row-fluid">
		            	<table class="table table-striped">
							<caption>
								
							</caption>
  							<thead>
							    <tr>
							    	<th><i class="icon-tags" style="margin-left:5px;" title="Unique identifier."></i></th>
							      	<th>Alias</th>
							      	<th>Schema</th>
							      	<th><i class="icon-refresh"></i> Monitoring Status</th>
							      	<th><i class="icon-calendar"></i> Record Date</th>
							      	<th><i class="icon-wrench"></i> Informations</th>
							    </tr>
  							</thead>
  							<tbody>
  								<c:forEach items="${databaseList}" var="database">
    								<tr>    								
								      	<td>
								      		<span class="badge badge-inverse">${database.id}</span>
								      	</td>
								      	<td>
								      		<a href="${pageContext.servletContext.contextPath}/databases/view/${database.id}" title="Click here to view more detail of the resource.">${database.alias}</a>
								      	</td>
								      	<td>${database.name}</td>
								      	<td>
								      		<c:choose>
        										<c:when test="${database.status == true}">
        											<i class="status-monitor-active"></i>
				        						</c:when>
				        						<c:otherwise>
        											<i class="status-monitor-inactive"></i>
        										</c:otherwise>
       										</c:choose>								      	
								      	</td>
								      	<td>${database.recordDate}</td>
								      	<td>
											<a href="${pageContext.servletContext.contextPath}/databases/view/${database.id}" title="Click here to view more detail of the resource.">About</a>
								      	</td>						
    								</tr>
    							</c:forEach>
  							</tbody>
						</table>
						<c:if test="${databaseList.isEmpty() || databaseList == null}">
							<div class="alert">
								<button type="button" class="close" data-dismiss="alert">&times;</button>
								There are no <strong>Databases</strong>.
							</div>
						</c:if>               
		            </div><!--/row-->            		            		       
        		</div><!--/span-->       		
    		</div><!--/row-->
    		
    		<%@include file="/static/footer.jsp"%>

		</div><!--/.fluid-container-->	 	
		<%@include file="/static/javascript_footer.jsp"%>
		<script type="text/javascript">
		    $(document).ready(function () {
		    	
		    	$('#container-summary').highcharts({
		    		 chart: {
		                 plotBackgroundColor: null,
		                 plotBorderWidth: null,
		                 plotShadow: false
		             },
		             title: {
		                 text: 'Database Status'
		             },
		             tooltip: {
		         	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
		             	percentageDecimals: 1
		             },
		             plotOptions: {
		                 pie: {
		                     allowPointSelect: true,
		                     cursor: 'pointer',
		                     dataLabels: {
		                         enabled: false
		                     },
		                     showInLegend: true
		                 }
		             },
		             series: [{
		                 type: 'pie',
		                 name: 'Database',
		                 data: [
		                     ['Not Active', ${amountNotActive}],
		                     {
		                         name: 'Active',
		                         y: ${amountActive},
		                         sliced: true,
		                         selected: true,
		                         color: '#1ec91e'
		                     }
		                 ]
		             }]
		        });
		    });
		</script>	      
		<script src="http://code.highcharts.com/highcharts.js" type="text/javascript"></script>
    	<script src="http://code.highcharts.com/modules/data.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js" type="text/javascript"></script>	
	</body>
</html>