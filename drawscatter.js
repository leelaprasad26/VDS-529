
function scatterPlot(id,url,givenTopic,givenclass) {
    const titles = {    
        "temporal":["mean_time","max_time"],
        "sentiment":["positive","negative"],
        "pysholingustic":["WC","Clout","Tone","WPS","Dic","Analytic","Authentic","Linguistic","label"],
        "emotion":["sadness","fear","anger","disgust","anticipation","joy","surprise","trust","label"],
        "lexical":["i","we","you","shehe","they","ipron","det","article","label"]};

    var checkboxesHtml="<select name=\"features\" id=\"features\" onchange=\"callcontin('"+id+"','"+url+"','"+givenTopic+"','"+givenclass+"',this)\"><option value=\"\" checked>Plese select</option>"
    for(feature of titles[givenTopic]){
        checkboxesHtml+="<option value=\""+feature+"\">"+feature+"</option>"
    }
    checkboxesHtml+="</select>"
    document.querySelector(id).innerHTML=checkboxesHtml
}

function callcontin(id,url,givenTopic,givenclass,givenfeature){
    console.log(givenfeature.value,givenfeature)
    document.querySelector(id).innerHTML="<div id='legend'></div>"
    const title = [givenfeature.value]
    console.log("helloscatter")
    

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        `translate(${margin.left},${margin.top})`);

        

    // get the data
    d3.csv(url).then(function (data) {
        console.log(data);

        const valuesWithFeatures0 = {}

        
        
    for (dataIterate of data) {

        if(dataIterate.label==givenclass){

                //feature==  max_time,mean_time 
            for(featurekey of title){
                const feattureValue=dataIterate[featurekey]
                if(valuesWithFeatures0[featurekey]){
                    //varsa değeri
                    valuesWithFeatures0[featurekey].push(feattureValue)

                }
                else{
                    //yoksa değeri
                    valuesWithFeatures0[featurekey]=[feattureValue]
                }
                
            }

        }


    }
    var cLass
    function transform(givcals){
        if(givcals=="0"){
            cLass="BD"

        }
        if(givcals=="1"){
            cLass="SZ"

        }
        if(givcals=="2"){
            cLass="HC"

        }
        return cLass

    }
    
    //console.log(valuesWithFeatures0);//max and minin ortalamsını verir.
    for (valuesIndex in valuesWithFeatures0) {
    const avg = valuesWithFeatures0[valuesIndex].reduce((a,b) => parseInt(a)+parseInt(b), 0) / valuesWithFeatures0[valuesIndex].length;
    const min = Math.min(...valuesWithFeatures0[valuesIndex])
    const max=Math.max(...valuesWithFeatures0[valuesIndex])
    valuesWithFeatures0[valuesIndex] = {"avg": avg, "min": min, "max": max};
    }
    //console.log(valuesWithFeatures0)
    //console.log(valuesWithTopics);

    const values = Object.values(valuesWithFeatures0);
    const max = values.reduce((a, b) => Math.max(a, b.min, b.max, b.avg), 0);
    const min = values.reduce((a, b) => Math.min(a, b.min, b.max, b.avg), 0);

    console.log(values, min, max);
    // X axis: scale and draw:
    const x = d3.scaleBand()
    .range([0, width])
    .domain(title)     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
    .padding(1);
    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

    // Y axis: scale and draw:
    const y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([min == 0 ? min - (max-min)*1/10 : min-min*1/10, max+max*1/5]);   // d3.hist has to be called before the Y axis obviously
    svg.append("g")
    .call(d3.axisLeft(y));
    //console.log(valuesWithFeatures0);
const data1 = [];
    for (topicKey of Object.keys(valuesWithFeatures0)) {
    data1.push({
        key: topicKey,
        value: valuesWithFeatures0[topicKey]
        
    });
    }
    

