<?php
  include_once 'utils/functions.php';
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Calculator results</title>
    <style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Operations</th>
          <th>IP</th>
          <th>Time</th>
          <th>Browser</th>
        </tl>
      </thead>
      <tbody>
        <?= getCalculationsReverse() ?>
      </tbody>
    </table>
  </body>
</html>
