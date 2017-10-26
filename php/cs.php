<?php
	header("content-type:text/html;charset=utf-8");
		$url = "'../index.html'";
		echo '登录成功2秒，以后跳转到登陆页面';
		echo '<script type="text/javascript">';
		echo 'setTimeout("window.location.href ='.$url.'",3000);';
		echo '</script>';	
?>
