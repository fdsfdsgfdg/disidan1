
	//事件绑定
	var changebind = function(input , type , fn){
		input.on(type,function(){
			fn();
		});
	}
	//表单验证
	var verformat = function(val,type){
		var istrue;
		switch(type){
			case "zcname" :  istrue = true;break;
			case "zcpass" :  if(val.length >= 6 && val.length <= 16)
			{istrue = true}else{istrue = false};break;
		}
		if(istrue){
			return true;
		}else{
			return false;
		}
	}
	



