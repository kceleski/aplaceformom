<?php
require_once 'dbconfig.php'; // Path to your dbconfig.php file

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve POST data
    $type = isset($_POST['type']) ? $_POST['type'] : '';
    $city = isset($_POST['city']) ? $_POST['city'] : '';
    $state = isset($_POST['state']) ? $_POST['state'] : '';

    // Now, you can use the $conn variable to execute queries
    $sql = "";

    if($type === "alzheimers-care") {
        $sql = "SELECT * FROM `alzheimers-care` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "assisted-living") {
        $sql = "SELECT * FROM `assisted-living` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "independent-living") {
        $sql = "SELECT * FROM `independent-living` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "home-care") {
        $sql = "SELECT * FROM `home-care` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "nursing-homes") {
        $sql = "SELECT * FROM `nursing-homes` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "senior-apartments") {
        $sql = "SELECT * FROM `senior-apartments` WHERE `state` = :state AND `city` = :city";
    }
    if($type === "care-homes") {
        $sql = "SELECT * FROM `care-homes` WHERE `state` = :state AND `city` = :city";
    }
    

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':state', $state);
    $stmt->bindParam(':city', $city);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $result = json_encode($rows); // Convert the array to JSON

    header('Content-Type: application/json'); // Set Content-Type to application/json
    echo $result; // Output the JSON string

    // No need to close the connection, as it will automatically close at the end of the script
}
?>

