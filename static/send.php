<?php 
// ОТПРАВКА В ТЕЛЕГРАММ
// ==================================================================================================================
   $site = 'ХУДОЖНИК СЕРЕБРЯНСКАЯ ОЛЬГА';
   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $text = $_POST['text'];
   $complexity = $_POST['complexity'];
   $square = $_POST['square'];
   $primer = $_POST['primer'];
   $picture = $_POST['picture'];
   $connection = $_POST['connection'];
   //Отправка в Telegram
  
   $token = "7457801970:AAEkS6ojRewhUWdOEMRdJjyhXTjaslVY39U";
   
   $chat_id = "-4578081484";
  
   // Формирование текста сообщения
   $message = "Заявка с сайта: $site\n";

   if (!empty($name)) {
       $message .= "Имя пользователя: $name\n";
       $message .= "";
   }
   if (!empty($phone)) {
       $message .= "Телефон: $phone\n";
       $message .= "";
   }
   if (!empty($text)) {
       $message .= "Сообщение: $text\n";
       $message .= "";
   }
   if (!empty($complexity)) {
       $message .= "Сложность рисунка: $complexity\n";
       $message .= "";
   }
   if (!empty($square)) {
       $message .= "Площадь рисунка: $square\n";
       $message .= "";
   }
   if (!empty($primer)) {
       $message .= "Стена покрашена/прогрунтована: $primer\n";
       $message .= "";
   }
   if (!empty($picture)) {
       $message .= "Есть картинка: $picture\n";
       $message .= "";
   }
   if (!empty($connection)) {
       $message .= "Способ связи: $connection\n";
       $message .= "";
   }


  // Опционально, прикрепите файл к письму
  if (!empty($_FILES['uploaded_file']['tmp_name'])) {
    $upload_file = $_FILES['uploaded_file']['tmp_name'];
    $file_name = $_FILES['uploaded_file']['name'];

    // Отправка файла в Telegram
    $url = "https://api.telegram.org/bot$token/sendDocument";
    $post_fields = array(
        'chat_id' => $chat_id,
        'document' => new CURLFile($upload_file, mime_content_type($upload_file), $file_name),
        'caption' => $message
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type:multipart/form-data"
    ));
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
    $result = curl_exec($ch);
    curl_close($ch);
  }

  
  if ($result === false) {
    // Обработка ошибки
    echo "Ошибка при отправке заявки в Телеграм.";
  } else {
    // Успешная отправка
    echo "Заявка успешно отправлена в Телеграм.";
  }



// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

if ($sendToTelegram) {$result = "success";} 
else {$result = "error";}


?>