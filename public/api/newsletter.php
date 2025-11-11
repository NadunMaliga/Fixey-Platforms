<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate email
if (empty($data['email'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email is required']);
    exit();
}

$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Email configuration
$to = 'fixeydevelopers@gmail.com';
$subject = 'New Newsletter Subscription';

// Email body - Modern Design
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            background: #e5e7eb;
            padding: 20px;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .header { 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white; 
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            font-size: 28px;
            font-weight: 600;
            letter-spacing: -1px;
            margin-bottom: 8px;
        }
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        .emoji {
            font-size: 48px;
            margin-bottom: 15px;
        }
        .content { 
            padding: 40px 30px;
            background: white;
        }
        .field { 
            margin-bottom: 24px;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .label { 
            display: block;
            font-weight: 600;
            color: #10b981;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .value {
            color: #1f2937;
            font-size: 16px;
            line-height: 1.6;
        }
        .email-box {
            background: #f0fdf4;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #10b981;
            font-size: 18px;
            font-weight: 600;
            color: #059669;
        }
        .footer { 
            background: #f9fafb;
            text-align: center; 
            color: #6b7280; 
            font-size: 13px; 
            padding: 30px;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            margin: 5px 0;
        }
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: white;
            margin-bottom: 5px;
        }
        .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <div class='emoji'>🎉</div>
            <div class='logo'>Fixey Platforms</div>
            <h1>New Subscriber!</h1>
            <p>Someone just joined your newsletter</p>
            <div class='badge'>Newsletter Subscription</div>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>📧 Email Address</span>
                <div class='email-box'>$email</div>
            </div>
            <div class='field'>
                <span class='label'>🕐 Subscribed At</span>
                <div class='value'>" . date('l, F j, Y \a\t g:i A') . "</div>
            </div>
            <div class='field'>
                <span class='label'>🌐 IP Address</span>
                <div class='value'>" . $_SERVER['REMOTE_ADDR'] . "</div>
            </div>
        </div>
        <div class='footer'>
            <p style='font-weight: 600; color: #1f2937; margin-bottom: 10px;'>Fixey Software Solutions (Pvt) Ltd</p>
            <p>Kalutara, Sri Lanka</p>
            <p>fixeydevelopers@gmail.com</p>
            <p style='margin-top: 15px; font-size: 11px;'>© " . date('Y') . " Fixey Platforms. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Fixey Platforms <noreply@fixeyplatforms.com>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $email_body, $headers)) {
    // Save to subscribers list
    $subscribers_file = __DIR__ . '/../logs/newsletter_subscribers.txt';
    $log_dir = dirname($subscribers_file);
    if (!file_exists($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    // Check if email already exists
    $existing_subscribers = file_exists($subscribers_file) ? file($subscribers_file, FILE_IGNORE_NEW_LINES) : [];
    
    if (!in_array($email, $existing_subscribers)) {
        $subscriber_entry = $email . " | " . date('Y-m-d H:i:s') . "\n";
        file_put_contents($subscribers_file, $subscriber_entry, FILE_APPEND);
    }
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for subscribing! You will receive updates from Fixey Platforms.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to subscribe. Please try again later.'
    ]);
}
?>
