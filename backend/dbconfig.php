<?php
// dbconfig.php
$servername = "localhost"; // or your server's IP address
$username = "root"; // your database username
$password = "root"; // your database password
$database = "aplaceformom"; // your database name

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Optionally, you can echo a connection success message, but it's not recommended for production
    // echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
