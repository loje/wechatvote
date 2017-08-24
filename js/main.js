$(document).ready(function(){
	$(".university-list .form-group .form-control").change(function(){
		if($(".un").val() == 0){
			$(".govote-btn").attr("disabled","disabled");
			$(".govote-btn").removeAttr("style");
			$(".govote-btn").text("请选择学校");
		}else if($(".college").val() == 0){
			$(".govote-btn").attr("disabled","disabled");
			$(".govote-btn").removeAttr("style");
			$(".govote-btn").text("请选择学院");
		}else{
			$(".govote-btn").removeAttr("disabled");
			$(".govote-btn").text("点击参与投票");
			$(".govote-btn").attr("style","background-color: #44b549;color: #fff;");
		}
	})

	var a = 0;
	var b = $(".subject").length;
	$(".btn[type=submit]").click(function(){
		if(a == b){
			console.log(a);
			$(".votedbox").removeAttr("style");
			$(".votebox").attr("style","display:none;");
		}else{
			$.each($(".subject"),function(i,item){
				if(!$(this).find("input:checked").length){
					alert("第"+(i+1)+"道题目还没选择！");
					return false;
				}else{
					a = a + 1;
				}
			});
		}
	})
	// $(".btn[type=submit]").click(function(){
	// 	if($("input[type=radio]:checked").val()==null || $("input[type=checkbox]:checked").val()==null){
	// 		alert("问卷还没完成！");
	// 		return false;
	// 	}else{
	// 		$(".votedbox").removeAttr("style");
	// 		$(".votebox").attr("style","display:none;");
	// 	}
	// })
})