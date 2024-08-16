<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "admin";
$password = "Utsav@123";
$dbname = "bmw";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error)));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];

// Validate input
if (empty($username) || empty($password)) {
    echo json_encode(array("success" => false, "message" => "Username and password are required."));
    exit();
}

// Check if username already exists
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(array("success" => false, "message" => "Username already exists."));
    $stmt->close();
    $conn->close();
    exit();
}

// Store the plain text password in the database (not recommended)
$sql = "INSERT INTO users (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo json_encode(array("success" => true, "message" => "Registration successful"));
} else {
    echo json_encode(array("success" => false, "message" => "Registration failed."));
}

$stmt->close();
$conn->close();
?>
