<?php

require 'dbconn.php';

if (isset($_POST)) {    

  $sql = '';

  if(isset($_POST['userId']) && $_POST['userId'] === '1') { // 1 is admin
    $sql = $conn->prepare("SELECT p.*, CONCAT(u.first_name, ' ', u.last_name) AS owner FROM db_tenebras.tbl_projects AS p INNER JOIN tbl_users AS u ON p.user_id = u.user_id;");
    $sql->execute();
  } else {
    $sql = $conn->prepare("SELECT p.*, CONCAT(u.first_name, ' ', u.last_name) AS owner FROM db_tenebras.tbl_projects AS p INNER JOIN tbl_users AS u ON p.user_id = u.user_id WHERE p.user_id = ?");
    $sql->bind_param('i', $_POST['userId']);
    $sql->execute();
  }

    $result = $sql->get_result();
    
    if ($result->num_rows > 0) {
      // output data of each row
      echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    } else {
      echo false;
    }

}

if (isset($_GET['id'])) {
  echo $_GET['id'];
  
  $sql = $conn->prepare("DELETE FROM `db_tenebras`.`tbl_projects` WHERE (`project_id` = ?)");
  $sql->bind_param('i', $_GET['id']);
  $sql->execute();

  $result = $sql->get_result();
  header("Location: http://localhost:8888/tenebras-client/dashboard.html");
  
}
  
