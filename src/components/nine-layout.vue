<template>
  <div class="nine-layout-view">
    <ul>
      <li v-for="item in layoutData" :key="item.id">
        <div class="box" :style="{'background-color':item.bgColor}">
          {{item.id}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nine-layout',
  data () {
    return {
      layoutData: [
        { id: 1, time: 300, bgColor: 'pink', bgColor1: 'pink', bgColor2: '#da6478' },
        { id: 2, time: 400, bgColor: 'bisque', bgColor1: 'bisque', bgColor2: '#eaa34e' },
        { id: 3, time: 500, bgColor: 'blue', bgColor1: 'blue', bgColor2: '#8a8ae4' },
        { id: 4, time: 600, bgColor: 'brown', bgColor1: 'brown', bgColor2: '#651f1f' },
        { id: 5, time: 200, bgColor: 'chartreuse', bgColor1: 'chartreuse', bgColor2: '#a8c38c' },
        { id: 6, time: 300, bgColor: 'darkblue', bgColor1: 'darkblue', bgColor2: '#6969da' },
        { id: 7, time: 400, bgColor: 'darkgreen', bgColor1: 'darkgreen', bgColor2: '#748074' },
        { id: 8, time: 500, bgColor: 'darksalmon', bgColor1: 'darksalmon', bgColor2: '#efe2dd' },
        { id: 9, time: 600, bgColor: 'darkgrey', bgColor1: 'darkgrey', bgColor2: '#757575' }
      ]
    }
  },
  mounted () {
    console.log(this.layoutData)

    this.layoutData.forEach((element, i) => {
      setInterval(() => {
        if (element.bgColor === element.bgColor1) {
          element.bgColor = element.bgColor2
        } else {
          element.bgColor = element.bgColor1
        }
      }, (element.time + 200))
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
ul {
  width: 96%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: -10px;
  li {
    width: 32%;
    height: 100px;
    flex-shrink: 0;
    margin-bottom: 10px;
    .box {
      width: 100%;
      height: 100%;
      line-height: 6;
      color: #fff;
    }
  }
}
</style>
