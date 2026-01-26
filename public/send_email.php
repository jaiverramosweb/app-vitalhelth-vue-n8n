<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Cargar PHPMailer (Ajusta estas rutas según tu estructura real en cPanel)
require_once __DIR__ . '/src/PHPMailer-master/src/PHPMailer.php';
require_once __DIR__ . '/src/PHPMailer-master/src/Exception.php';
require_once __DIR__ . '/src/PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // --- CONFIGURACIÓN SMTP (Actualiza con tus datos de cPanel) ---
        $mail->isSMTP();
        $mail->Host       = 'mail.tuservidor.com'; // O 'localhost' si estás en el mismo servidor
        $mail->SMTPAuth   = true;
        $mail->Username   = 'tu-email@dominio.com';
        $mail->Password   = 'tu-password-seguro';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port       = 465;
        $mail->CharSet    = 'UTF-8';

        // --- DESTINATARIOS ---
        $mail->setFrom('no-reply@ipsvitalhealth.com', 'Web Vital Health');
        $mail->addAddress('talentohumano@ipsvitalhealth.com');
        if (isset($_POST['email'])) {
            $mail->addReplyTo($_POST['email'], isset($_POST['nombres']) ? $_POST['nombres'] : '');
        }
        // --- CONTENIDO ---
        $subject = isset($_POST["_subject"]) ? $_POST["_subject"] : "Nuevo mensaje desde el sitio web";
        $mail->isHTML(true);
        $mail->Subject = $subject;

        // Cuerpo dinámico (Tabla HTML)
        $body = "<h2>Detalles del Formulario</h2><table border='1' cellpadding='10' style='border-collapse: collapse; width: 100%;'>";
        foreach ($_POST as $key => $value) {
            if ($key[0] !== '_') {
                $body .= "<tr><td style='background-color: #f2f2f2; font-weight: bold;'>" . ucfirst($key) . "</td><td>" . htmlspecialchars($value) . "</td></tr>";
            }
        }
        $body .= "</table>";
        $mail->Body = $body;

        // --- ADJUNTOS ---
        if (isset($_FILES["hv"]) && $_FILES["hv"]["error"] == UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES["hv"]["tmp_name"], $_FILES["hv"]["name"]);
        }

        // --- DEBUGGING LOCAL (Log file) ---
        $debugContent = "[".date('Y-m-d H:i:s')."] Enviando a: ".$mail->getAllRecipientAddresses()[0]. " | Asunto: $subject\n";
        file_put_contents("debug_email_log.txt", $debugContent, FILE_APPEND);

        // Envío
        if ($_SERVER['REMOTE_ADDR'] === '::1' || $_SERVER['REMOTE_ADDR'] === '127.0.0.1') {
            // En local saltamos el envío real para evitar el error de SMTP si no tienes internet/configuracion
            $status = "success";
            $msg = "Simulación local exitosa. Revisa debug_email_log.txt";
        } else {
            $mail->send();
            $status = "success";
            $msg = "Correo enviado correctamente con PHPMailer.";
        }

        http_response_code(200);
        echo json_encode(["status" => $status, "message" => $msg]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error de PHPMailer: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>
