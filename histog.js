function gethistogram(titles,color0,color1,class1,class2,idhist,idscat,url){
    
console.log(class1,class2)

  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select(idhist)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      `translate(${margin.left},${margin.top})`);

  // get the data
  d3.csv(url).then(function (data) {
    console.log(data);

    // sum up the features under topics
    const valuesWithTopics0 = {};//HZ
    const valuesWithTopics1 = {};//SZ
    const valuesWithTopics2 = {};//BP
    for (dataIterate of data) {
      if(dataIterate.label=="0"){


        for (dataFeatureKey of Object.keys(dataIterate)) {
        const dataFeatureValue = dataIterate[dataFeatureKey];
        //console.log(dataFeatureKey, dataFeatureValue)
  
        const topics = Object.keys(titles);
        for (topic of topics) {
          // console.log(topic)
          if (titles[topic].includes(dataFeatureKey)) {
            if (valuesWithTopics0[topic]) {
              valuesWithTopics0[topic].push(dataFeatureValue);
            } else {
              valuesWithTopics0[topic] = [dataFeatureValue]
            }
          }
        }
      }

      }
      if(dataIterate.label=="1"){


        for (dataFeatureKey of Object.keys(dataIterate)) {
        const dataFeatureValue = dataIterate[dataFeatureKey];
        //console.log(dataFeatureKey, dataFeatureValue)
  
        const topics = Object.keys(titles);
        for (topic of topics) {
          // console.log(topic)
          if (titles[topic].includes(dataFeatureKey)) {
            if (valuesWithTopics1[topic]) {
              valuesWithTopics1[topic].push(dataFeatureValue);
            } else {
              valuesWithTopics1[topic] = [dataFeatureValue]
            }
          }
        }
      }

      }
      