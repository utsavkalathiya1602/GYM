<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and content type
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Database credentials
$host = 'localhost';
$db = 'bmw';
$user = 'admin';
$pass = 'Utsav@123';

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Get and decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate input data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$name = $data['name'];
$email = $data['email'];
$subject = $data['subject'];
$message = $data['message'];

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO gym (name, email, subject, message) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]);
    exit();
}

// Bind parameters
$stmt->bind_param("ssss", $name, $email, $subject, $message);

// Execute statement
if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Message submitted successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Execution failed: " . $stmt->error]);
}

// Close statement and connection
$stmt->close();
$conn->close();
?>