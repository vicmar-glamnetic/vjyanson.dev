<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$data    = json_decode(file_get_contents('php://input'), true) ?: $_POST;
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'All fields required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

// Strip newlines to prevent header injection
$name  = str_replace(["\r", "\n"], '', $name);
$email = str_replace(["\r", "\n"], '', $email);

$to      = 'contact@vjyanson.com';
$subject = "Portfolio Inquiry from $name";
$body    = "New inquiry from your portfolio site.\n\n"
         . "Name:    $name\n"
         . "Email:   $email\n\n"
         . "Message:\n$message";

$headers = "From: noreply@vjyanson.com\r\n"
         . "Reply-To: $email\r\n"
         . "MIME-Version: 1.0\r\n"
         . "Content-Type: text/plain; charset=UTF-8";

$sent = @mail($to, $subject, $body, $headers);

http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);
