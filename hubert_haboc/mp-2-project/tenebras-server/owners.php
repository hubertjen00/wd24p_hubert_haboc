<?php

require 'dbconn.php';

if (isset($_POST)) {    

  $sql = '';

    $sql = $conn->prepare('SELECT * FROM tbl_users WHERE user_id != 1');
    $sql->execute();

    $result = $sql->get_result();
    
    if ($result->num_rows > 0) {
      // output data of each row
      echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    } else {
      echo false;
    }

}

