<?php 

require 'dbconn.php';

if (isset($_POST)) {
    $sql = "INSERT INTO tbl_users (email, password, first_name, last_name, company_name) VALUES (
        '". $_POST['email'] ."', 
        '". md5($_POST['password']) ."', 
        '". $_POST['firstName'] ."', 
        '". $_POST['lastName'] ."', 
        '". $_POST['companyName'] ."')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created succesfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
          
}