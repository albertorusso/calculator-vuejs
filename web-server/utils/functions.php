<?php
  function getClientIp() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'unknown';

    return $ipaddress;
  }

  function getUserBrowser() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    if($userAgent == ''){
      $userAgent = "not available";
    }
    return $userAgent;
  }

  function timeSubmitted(){
    date_default_timezone_set('UTC');
    return date("D M j G:i:s T Y");
  }

  function generateCsv($data, $delimiter = ',', $enclosure = '"') {
    if(!file_exists('save-calculation')){
      mkdir('save-calculation', 0777, true);
    }

    $fp = fopen('save-calculation/file.csv', 'a+');

    foreach ($data as $fields) {
      fputcsv($fp, $fields);
    }
    fclose($fp);

  }

  function getCalculationsReverse(){
    $filename = 'save-calculation/file.csv';
    $tableBodyContent = '';
    if(file_exists($filename)){
      $csv = explode("\n", file_get_contents($filename));
      $csvRevert = array_reverse($csv);


      foreach ($csvRevert as $key => $line){
      	$csv[$key] = str_getcsv($line);
        if($csv[$key][0] != ''){
          $tableBodyContent .= "<tr>";
            foreach ($csv[$key] as $j => $item){
              $tableBodyContent .= '<td>'.$item.'</td>';
            }
          $tableBodyContent .= "</tr>";
        }
      }
    }

    return $tableBodyContent;
  }
?>
