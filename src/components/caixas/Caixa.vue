<template>
  <div class="box" :style="'border-top-color: '+cor+';'">
    <div class="box-header with-border">
      <h3 class="box-title">{{titulo}}</h3>

      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body chart-responsive">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {      
    props:['titulo','cor']
}
</script>


<style scoped>

</style>
