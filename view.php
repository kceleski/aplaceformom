<?php
require_once 'dbconfig.php'; // Path to your dbconfig.php file

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve POST data
    $type = isset($_POST['type']) ? $_POST['type'] : '';
    $id = isset($_POST['id']) ? $_POST['id'] : '';

    // Now, you can use the $conn variable to execute queries
    $sql = "";

    if($type === "alzheimers-care") {
        $sql = "SELECT * FROM `alzheimers-care` WHERE `id` = :id LIMIT 1";
    }
    if($type === "assisted-living") {
        $sql = "SELECT * FROM `assisted-living` WHERE `id` = :id LIMIT 1";
    }
    if($type === "independent-living") {
        $sql = "SELECT * FROM `independent-living` WHERE `id` = :id LIMIT 1";
    }
    if($type === "home-care") {
        $sql = "SELECT * FROM `home-care` WHERE `id` = :id LIMIT 1";
    }
    if($type === "nursing-homes") {
        $sql = "SELECT * FROM `nursing-homes` WHERE `id` = :id LIMIT 1";
    }
    
    if($type === "senior-apartments") {
        $sql = "SELECT * FROM `senior-apartments` WHERE `id` = :id LIMIT 1";
    }

    if($type === "care-homes") {
        $sql = "SELECT * FROM `care-homes` WHERE `id` = :id LIMIT 1";
    }
    

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $result = json_encode($row); // Convert the array to JSON

    header('Content-Type: application/json'); // Set Content-Type to application/json
    echo $result; // Output the JSON string

    // No need to close the connection, as it will automatically close at the end of the script
}
?>

