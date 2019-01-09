<?php
  include 'utils/functions.php';

  function save($expressionSummary, $expression){

    $response = new stdClass();
    $response->expressionSummary = $expressionSummary.$expression;
    $response->message = "SAVED";
    $response->ip = getClientIp();
    $response->time = timeSubmitted();
    $response->userAgent = getUserBrowser();

    $data = array(array($response->expressionSummary, $response->ip , $response->time, $response->userAgent));

    generateCsv($data);

    echo json_encode($response);
  }
?>
