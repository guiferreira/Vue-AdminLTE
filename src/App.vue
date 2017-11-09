<template>
  <span>
  <div class="wrapper">
    <topo :logo="'<b>Vue</b>AdminLTE'" :logomin="'<b>V</b>A'"></topo>
    <menu-lateral></menu-lateral>
    <conteudo>
      <router-view/>
    </conteudo>
    <rodape></rodape>
    <menudireito></menudireito>
    <div class="control-sidebar-bg"></div>
  </div>

  </span>
</template>

<script>
import Nav from '@/components/layout/Topo'
import Menu from '@/components/layout/MenuLateral'
import Conteudo from '@/components/layout/Conteudo'
import MenuDireito from '@/components/layout/MenuDireito'
import Rodape from '@/components/layout/Rodape'

export default {
  components:{
    'topo': Nav,
    'menu-lateral': Menu,
    'conteudo': Conteudo,
    'menudireito': MenuDireito,
    'rodape': Rodape,
  }
}
</script>

<style>
 @import url('assets/bower_components/bootstrap/dist/css/bootstrap.min.css');
 @import url('assets/bower_components/font-awesome/css/font-awesome.min.css');
 @import url('assets/bower_components/Ionicons/css/ionicons.min.css');
 @import url('assets/css/AdminLTE.min.css');
 @import url('assets/css/skins/_all-skins.min.css');
 @import url('assets/bower_components/morris.js/morris.css');
 @import url('assets/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css');
 @import url('assets/bower_components/bootstrap-daterangepicker/daterangepicker.css');
 @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic');

 /*
 @import url('');
*/


</style>
