<?php

//I todo verranno presi dal database e se ne dovranno aggiugnere di nuovi. 

//Funzionamento: 
// - Recupera i todo
// - Metti un puntatore per inserire i nuovi elementi, magari? (funzione di Jquery interessante)


//Qui verranno inseriti i todo, in qualche modo. 

?>


<div style="margin-top:30px">
  <!-- <button class="btn btn-primary" ng-click="reload()">Reload \m/</button> -->
  
  <div class="row justify-content-center" id="noTodosP">
    <div class="col-10"><p ng-show="!todos.length">No Todos!</p></div>
  </div>

  <div id="list">
  </div>
  
</div>

<hr>