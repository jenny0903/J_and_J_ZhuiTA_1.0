<?php
session_start();

if(isset($_SESSION['cookie'])){
	unset($_SESSION);
    if(isset($_COOKIE[session_name()])){
        setcookie(session_name(),'',time()-3600);
    }
    session_destroy();
}
setcookie('cookie','',time()-3600);

header("location: ../../index.php");

?>