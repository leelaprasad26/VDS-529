function scatter(class1,class2,color0,color1,valuesWithTopics0,valuesWithTopics1,svg,x,y,height,url){
  // var color0="#ff7400"
  // var color1="ff7400"
    const data0 = [];
    for (topicKey of Object.keys(valuesWithTopics0)) {
      data0.push({
        key: topicKey,
        value: valuesWithTopics0[topicKey]
      });
    }
    // append the bar rectangles to the svg element
    //console.log(data0)//1. 20 ->55 55 ->90 2 115
    svg.selectAll("rect")
    
      .data(data0)
      .join("rect")
      
      .attr("id",function (d){return "data0"+d.key})
      .attr("x", 1)
      .attr("transform", function (d) { d.value; return `translate(${x(d.key)-20}, ${y(d.value)})` })
      .attr("width", function (d) { return 30 })
      .attr("height", function (d) { return height - y(d.value); })
      .style("fill", color0)




  const data1 = [];
    for (topicKey of Object.keys(valuesWithTopics1)) {
      data1.push({
        key: topicKey,
        value: valuesWithTopics1[topicKey]
      });
    }
// append the bar rectangles to the svg element
    console.log(data1)//1. 20 ->55 55 ->90 2 115
    svg.selectAll("rect1")
      .data(data1)
      .join("rect")
      .attr("x", 1)
      
      .attr("id",function (d){return "data1"+d.key})
      .attr("transform", function (d) { console.log(d.value); return `translate(${x(d.key)+10}, ${y(d.value)})` })
      .attr("width", function (d) { return 30 })
      .attr("height", function (d) { return height - y(d.value); })
      .style("fill", color1)

      var tooltip2 = d3.select("#div_customContent")
      .append("div")
          .style("position", "absolute")
          .style("visibility", "hidden")
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "1px")
          .style("border-radius", "5px")
          .style("padding", "10px")
          .html("<p>I'm a tooltip written in HTML</p><img src='https://github.com/holtzy/D3-graph-gallery/blob/master/img/section/ArcSmal.png?raw=true'></img><br>Fancy<br><span style='font-size: 40px;'>Isn't it?</span>");

    
          var chartData = [
            {name: "Max Value", color: "#af6d00"},
            {name: "Avarage Value", color: "#007f00"},
            {name: "Min Value", color: "#0000a8"},
       
           ];
        
