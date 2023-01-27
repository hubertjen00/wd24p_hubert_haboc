<?php 

require 'dbconn.php';

if (isset($_POST)) {
    $sql = "INSERT INTO tbl_projects (project_name, user_id, project_owner, project_status, payment_status, delivery_date, turnover_date) VALUES (
        '". $_POST['projectName'] ."',
        '". $_POST['projectOwner'] ."', 
        '". $_POST['projectOwner'] ."', 
        '". $_POST['projectStatus'] ."', 
        '". $_POST['paymentStatus'] ."', 
        '". $_POST['deliveryDate'] ."',
        '". $_POST['turnoverDate'] ."')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
          
}