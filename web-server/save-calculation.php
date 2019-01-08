<?php
  function save($expressionSummary, $expression){

    $response = new stdClass();
    $response->expressionSummary = $expressionSummary.$expression;
    $response->message = "SAVED";

    echo json_encode($response);
  }
?>
