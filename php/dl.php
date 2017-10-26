<?php
	header("content-type:text/html;charset=utf-8");
	$dlusername = $_POST["n"];
	$dlpassword = $_POST["p"];	
	//1、接收客户端的数据（用户的输入）
	//2、处理
	//1)、连接数据库服务器
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "服务器出现错误(手动滑稽)";		
	}else{
		//2)、选择数据库
		mysql_select_db("user",$con);
		
		//3)、执行SQL语句（增）
		$sqlStr="select * from  usernp where UserName='".$dlusername."'";
	   // echo $sqlStr;
		$result = mysql_query($sqlStr,$con);
		//下面2行为获取用户名
		$sqlname = mysql_fetch_array($result);
		$msqlname = $sqlname['UserName'];
		//4)、关闭数据库
//		mysql_close($con);
		
		//数据库中查询出结果，表示用户名已经存在表中。
		if($dlusername == $msqlname){
			//如果用户名存在， 在判断密码是否存在

			$pass = "select * from  usernp where UserPass='".$dlpassword."'";
			$repass = mysql_query($pass,$con);
			//下面2行 第一行获得一个数组 第二行获取密码
			$sqlpass = mysql_fetch_array($repass);
			$msqlpass = $sqlname['UserPass'];	
			if($dlpassword == $msqlpass){
				echo "1";
//				$url = "../index.html";
//				echo '<script type="text/javascript">';
//				echo 'window.location.href ="'.$url.'"';
//				echo '</script>';	
			}else{
				echo "2";
//				echo "登录失败，原因：密码错误，2秒之后返回登陆页面";
//				$url = "'../dl.html'";
//				echo '<script type="text/javascript">';
//				echo 'setTimeout("window.location.href ='.$url.'",3000);';
//				echo '</script>';	
			}		
		}else{
			echo "3";
			//如果用户名不存在
//			echo "登录失败，原因：账号错误，2秒之后返回登陆页面";
//			$url = "'../dl.html'";
//			echo '<script type="text/javascript">';
//			echo 'setTimeout("window.location.href ='.$url.'",3000);';
//			echo '</script>';	
		}
	}
			//4)、关闭数据库
		mysql_close($con);
?>