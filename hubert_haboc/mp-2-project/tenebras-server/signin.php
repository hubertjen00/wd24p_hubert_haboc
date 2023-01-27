<?php 

require 'dbconn.php';


if (isset($_POST)) {
  
    $email = $_POST['email'];
    $pw = md5($_POST['password']);

    $sql = $conn->prepare('SELECT * FROM tbl_users WHERE email = ? AND password = ?');
    $sql->bind_param('ss', $email, $pw);
    $sql->execute();

    $result = $sql->get_result();   
    
    if ($result->num_rows > 0) {
        // output data of each row
      echo json_encode($result->fetch_assoc());
    } else {
      echo false;
    }
}



