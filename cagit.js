
function scatterPlot(id,url,givenTopic,givenclass) {
    const titles = {    
        "temporal":["mean_time","max_time"],
        "sentiment":["positive","negative"],
        "pysholingustic":["WC","Clout","Tone","WPS","Dic","Analytic","Authentic","Linguistic","label"],
        "emotion":["sadness","fear","anger","disgust","anticipation","joy","surprise","trust","label"],
        "lexical":["i","we","you","shehe","they","ipron","det","article","label"]};


    // console.log(givenfeature.value,givenfeature)
    document.querySelector(id).innerHTML="<div id='legend'></div>"
    // const title = [givenfeature.value]
    console.log(givenclass)
    

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
            for(featurekey of titles[givenTopic]){
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
            cLass="HC"

        }
        if(givcals=="1"){
            cLass="SZ"

        }
        if(givcals=="2"){
            cLass="BD"

        }
        return cLass

    }
    
    