<?php
    require_once ("db.php");
    $db = new Database();


    $action = $_POST['action'];
    if(isset($_POST['data'])) {
        $data = json_decode($_POST['data']);
    }

    if($action == 'get_comments'){
        $commentsData = $db->select("select * from wallDB");
        echo json_encode($commentsData);
    }

    if($action == 'insert_comment'){
        if(isset($data)){
            $db->insert("insert into wallDB (comment, author) values ('" . $data->commentMsg . "', '" . $data->author . "');");
            echo "insert into wallDB (comment, author) values ('" . $data->commentMsg . "', '" . $data->author . "');";
            return 1;
        }else{
            echo 'some error in requests';
        }
    }

    if($action == 'toggle_like'){
        if(isset($data)){
            $db->insert("UPDATE wallDB SET isLike =" . $data->isLike . " where idwallDB =" . $data->id );
            echo "UPDATE wallDB SET isLike = " . $data->isLike . " where idwallDB = " . $data->id . ")";
        }else{
            echo 'some error in requests';
        }
    }

?>