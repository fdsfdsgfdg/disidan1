function addajax(par,t){     //使用了 Promise addajax有了then()方法
		//创建ajax对象
		let xmls = new XMLHttpRequest();
		//默认值
		let obj = {
			//type,url,async,inobj,f
			type : 'get',
			url : null,
			async : true,
			inobj : null
			//返回的数据类型 
		}
		for(let i in par){
			obj[i] = par[i];
		}
		
		let mypar = "";
		//拼接参数
		for(let i in obj.inobj){
			mypar += i+"="+obj.inobj[i]+"&";
		}
		mypar = mypar.slice(0,-1);
		//创建回调函数
		xmls.onreadystatechange = function(){
			if( xmls.readyState == 4 ){
				//代码块
				if( xmls.status == 200 ){
					t(xmls.responseText);
					return;
				}
			}
		}
		let isget = "";
		if(obj.type == 'get'){
			isget = obj.url+'?'+mypar;
		}else if(obj.type == 'post'){
			isget = mypar;
		}
		//开始你的表演
		if(obj.type == 'get'){
			xmls.open(obj.type,isget,obj.async);
			xmls.send();
		}else if(obj.type == 'post'){
			xmls.open(obj.type,obj.url,obj.async);
			xmls.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmls.send(isget);
		}

}