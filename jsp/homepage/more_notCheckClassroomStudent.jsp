<%@ include file="/jsp/base/taglib.jsp" %>


<layout:override name="main_content">

<div class="row news_frame">
  <div class="col-lg-6" style="width:98%; margin:10px">
    <!--news base template-->
		<div class="">
		
		  <div class="front-wrap" style="height:auto!important;">
		    <div class="home-news">
		      
		      <div class="usoft-listview-header">
		        <h3>设备更换提醒          <small>Equipment-Replacement-Reminder </small> </h3> 
		      </div>
		      <br/>
		      
		      <div id="moreEquipmentReplacementDiv">
		      	<%@ include file = "/jsp/homepage/widgets/more_notCheckClassroomStudentTable.jsp" %>
		      </div>
		        
		     </div>
		   </div> 
		  </div>
    </div>
</div>
		      

<!-- 为了使用分页，include如下jsp -->
<%-- <%@ include file="/jsp/base/widgets/pagination.jsp" %> --%>

<script>

// // 你可以定义pageAddtionalData变量，这个变量应该是json变量，这个变量可以直接通过ajax 在选择页码的时候传到后台
// // 你应该重写下面这个函数，使其在回调的时候可以做你自己做的事情
// function requestPageCallback(data)
// {	
// 	$("#moreEquipmentReplacementDiv").html(data.device_list_html);
// }
</script>






</layout:override>










<%@ include file="/jsp/homepage/new_home_base.jsp" %>