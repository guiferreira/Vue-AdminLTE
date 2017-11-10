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
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../node_modules/font-awesome/css/font-awesome.min.css');
@import url('../node_modules/ionicons/dist/css/ionicons.min.css');
@import url('assets/css/AdminLTE.min.css');
@import url('assets/css/skins/_all-skins.min.css');
@import url('../node_modules/morris.js/morris.css');
@import url('../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css');
@import url('../node_modules/bootstrap-daterangepicker/daterangepicker.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic');


</style>
