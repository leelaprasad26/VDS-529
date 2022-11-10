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
    