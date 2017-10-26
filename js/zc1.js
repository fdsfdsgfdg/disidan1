//版本 1
function kzq(){
	
	
	let user = $("#zcname");
	let pass = $("#zcpass").val();
	let u = $("#zcname").val();
	let ids = {
			span : [
				{
					id : $("#zc_name_span"),
					tet : "你输入的账号已存在!"
				},
				{
					id : $("#zc_name_span"),
					tet : '恭喜你，账号可以注册!'
				}
			]
	}
	//1 . 参数
	//1.需要验证的表单元素
	//2.检测的类型   参考 verformat函数
	//3.事件类型
	//4.ids 需要输出的信息  id + text
	//返回值 一个布尔值
	
	
	//检测账号
	function yanzename(user,type,ontype,ids){
		changebind(user,ontype,function(){
			if(verformat(user.val(),type)){
					addajax({
					type : 'post',
					url : "php/zc1.php",
					async : 'true',
					inobj : {
						u : u
					}
				},function(data){
					if(data == "1")
					{
						$(ids.span[0].id).html(ids.span[0].tet);
						return true;
					}
					else if(data == "2")
					{
						$(ids.span[1].id).html(ids.span[1].tet);
						return false;
					}
				});
		
					
			}else{
				return false;
			}
			
			
			
			
			
		});
	}

	
	var tname =  yanzename(user,"zcname","change",ids);
	//检测密码
	function yanzepass(pass,type){
		if(tname){
			verformat(pass,type);
			return true;
		}else{
			return false;
		}
	}
	
	function btnyz(sub){
		if(tname && yanzepass(pass,"zcpass")){
			changebind(sub,'click',function(){
				addajax({
					type : 'post',
					url : "php/zc.php",
					async : 'true',
					inobj : {
						u : u,
						p : pass
					}
				},function(data){});
					
			});	
			
		}else{
		
		
		}
	
	}


	

}
	kzq();
