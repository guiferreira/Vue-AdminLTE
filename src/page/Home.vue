<template>
  <span>
    <section class="content-header">
      <h1>
        Dashboard
        <small>Painel de Controle</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>53<sup style="font-size: 20px">%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>

        <div class="row">
          <div class="col-md-3">
            <caixa titulo="BarChart" cor="blue">
              <bar-chart
                id="BarChart"
                :data="donutData"
                colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                resize="true">
              </bar-chart>
            </caixa>
          </div>
          <div class="col-md-3">
            <caixa titulo="Donut" cor="blue">
              <donut-chart
                id="donut"
                :data="donutData"
                colors='[ "red", "blue", "orange" ]'
                resize="true">
              </donut-chart>
            </caixa>
          </div>
          <div class="col-md-6">
            <caixa titulo="LineChart" cor="blue">
              <line-chart
                id="LineChart"
                :data="LineChart"
                xkey="y"
                :ykeys="['item1', 'item2']"
                :labels="['Item 1', 'Item 2']"
                :lineColors="['#a0d0e0', '#3c8dbc']"
                hideHover='auto'
                resize="true">
              </line-chart>
            </caixa>
          </div>

        </div>
        <!-- /.row -->

    </section>




  </span>

</template>

<script>
import { DonutChart,BarChart,LineChart,AreaChart } from 'vue-morris'
import Caixa from '../components/caixas/Caixa'
export default {

  data(){
    return{
      donutData: [
        { label: 'Red', value: 300 },
        { label: 'Blue', value: 50 },
        { label: 'Yellow', value: 100 }
      ],
      LineChart:[
        {y: '2011 Q1', item1: 2666},
        {y: '2011 Q2', item1: 2778},
        {y: '2011 Q3', item1: 4912},
        {y: '2011 Q4', item1: 3767},
        {y: '2012 Q1', item1: 6810},
        {y: '2012 Q2', item1: 5670},
        {y: '2012 Q3', item1: 4820},
        {y: '2012 Q4', item1: 15073},
        {y: '2013 Q1', item1: 10687},
        {y: '2013 Q2', item1: 8432}
      ]

    }
  },
    components: {
    DonutChart, BarChart, LineChart, AreaChart,Caixa
  }

}
</script>


<style scoped>

</style>
