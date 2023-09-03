<?php
session_start();
if(isset($_SESSION['counter'])){
    $_SESSION['counter']+=1;
}
else{
    $_SESSION['counter']=1;
}
$msg="you have visited this site".$_SESSION['counter']."times";
?>
<html>
    <body>
        <?php
        echo($msg);
        ?>
    </body>
</html>