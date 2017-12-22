<?php
    require_once ("db.php");
    $db = new Database();


    $action = $_POST['action'];
    if($action == 'go_php'){
        $lolArr = $db->select("select userName from comment where userID=1");
//        $lolArr = array(1,2,3,4,5);
        echo json_encode($lolArr);
    }

?>