/**
 * 
 */

var selectDeviceId;
var selectIndex;
/*提交维修记录*/
$(document).on('click','#submit_repair_record',function(){
	var repairdetail = $("#repairdetail").val();
	/*alert(selectDeviceId+" "+repairdetail);*/
	var params = {
			"repairdetail" : repairdetail,
			"deviceId" : selectDeviceId,
			"classroomId": $("#classroomid").text(),
		};
		
		$.ajax({
			url : '/admin/classroom_json/repairrecord_save',
			type : 'post',
			dataType : 'json',
			data : params,
			success : repairrecord_save_callback
		});
})
function repairrecord_save_callback(data) {
	if(data.savestatus == "fail") 
		alert("fail!");
	else if(data.savestatus == "success") {
		$("#repairrecord_jsp").html(data.repairrecord_jsp);
	}
	$('#repair-record-modal').modal('hide');
}
/*填写维修记录*/
$(document).on('click','.checkrecord',function(){
	/*alert("writecheckrecord");*/
	selectDeviceId = $(this).parents("[device_id]").attr("device_id");// attr所选元素属性值
	var num = $(this).parents("[device_num]").attr("device_num");
	var type = $(this).parents("[device_type]").attr("device_type");
	/*alert(selectDeviceId+" "+num+" "+type);*/
	$('#repair-record-modal').modal('show');
	$('#repair-record-modal').on('shown.bs.modal', function () {
		  $("#selectType").text(type);
		  $("#selectNum").text(num);
	})

})

/*加入教室*/
$(document).on('click','.move2class',function(){	
	rtID = $(this).parents("[rtID]").attr("rtID");// attr所选元素属性值
	classroom_id = $("#classroomid").text();
	/*alert(rtID+classroom_id);*/
	var params = {
			"classroomId" : classroom_id,
			"rtID" : rtID
	}
	
	$.ajax({
        url: '/admin/classroom_json/move2class',
        type: 'post',
        dataType: 'json',
        data : params,
        success: move2classCallback
      });

})

function move2classCallback(data){
	$("#device_jsp").html(data.device_jsp);
	$("#alterdevice_jsp").html(data.alterdevice_jsp);
	/*alert("callback");*/
}



/*备用设备*/
function alter_device() {
/*	alert("alter");*/
	var classroomid = $("#classroomid").text();
	/*alert(classroomid);*/
	var params = {
			"classroomId" : classroomid,
		};
	$.ajax({
        url: '/admin/classroom_json/alterdevice',
        type: 'post',
        dataType: 'json',
        data : params,
        success: alterdeviceCallback
      });
}

function alterdeviceCallback(data){
	$("#alterdevice_jsp").html(data.alterdevice_jsp);
	document.getElementById('alterdevice_jsp').style.display='';
}



/*移入维修*/
$(document).on('click','#move2repair',function(){
	/*alert("move2repair!");*/
	
	class_Id = $("#classroomid").text();
	move_device_id = $(this).parents("[device_id]").attr("device_id");// attr所选元素属性值
	/*alert(class_Id+"  "+move_device_id);*/
	var params = {
			"classroomId" : class_Id,
			"move_device_id" : move_device_id,
			"opt" : 1,
		};

	$.ajax({
        url: '/admin/classroom_json/move2repair',
        type: 'post',
        dataType: 'json',
        data : params,
        success: moveCallback
      });
})



/*移入报废*/
$(document).on('click','#move2bad',function(){
	/*alert("move2bad!");*/
	class_Id = $("#classroomid").text();
	move_device_id = $(this).parents("[device_id]").attr("device_id");// attr所选元素属性值
	/*alert(class_Id+"  "+move_device_id);*/
	var params = {
			"classroomId" : class_Id,
			"move_device_id" : move_device_id,
			"opt" : 1,
		};
	/*alert($("#device_jsp").html());*/
	$.ajax({
        url: '/admin/classroom_json/move2bad',
        type: 'post',
        dataType: 'json',
        data : params,
        success: moveCallback
      });
})

function moveCallback(data){
	/*alert("callback");*/
	$("#device_jsp").html(data.device_jsp);
}


function checkrecord_submit() {
	var checkrecord_detail = $("#checkdetail").val();
	var classroomid = $("#classroomid").text();
	var checkrecord_detail = $("#checkdetail").val();
//	alert(checkrecord_detail);
	var params = {
		"checkdetail" : checkrecord_detail,
		"classroomId": classroomid
	};
	
	$.ajax({
		url : '/admin/classroom_json/checkrecord_save',
		type : 'post',
		dataType : 'json',
		data : params,
		success : checkrecord_save_callback
	});
}

function checkrecord_save_callback(data) {
	if(data.savestatus == "fail") 
		alert("fail!");
	else if(data.savestatus == "success") {
		$("#checkrecord_jsp").html(data.checkrecord_jsp);
	}
	$('#check-record-modal').modal('hide');
}


window.onload = function () {
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
}

//添加设备按照 资产编号

function add_classroomrt() {
	var classroomid = $("#classroomid").text();
	var bh = $("#zichanhao").val();
	var href="<%=path%>/admin/classroomDevice/add_action";
	
//	move2classByRtNumber
//	alert(bh);
	$.ajax({
		url : '/admin/classroom_json/move2classByRtNumber',
		type : 'post',
		dataType : 'json',
		data : {
			"classroomId" : classroomid,
			"rtNumber" : bh,
		}, 
		success : function(data)
		{
			window.location.reload();
		}
	});
}










