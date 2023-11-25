import define1 from "./c6c7a741ac87d656@52.js";
import define2 from "./e93997d5089d7165@2303.js";
import define3 from "./26670360aa6f343b@202.js";

function _1(htl){return(
htl.html`<style>
  .left-info {
    color: DarkCyan;
    font-weight: bolder;
    font-size: x-large;}
  
  .right-info {
    color: MediumVioletRed; 
    font-style: italic;
    font-weight: bolder;
    font-size: x-large;}

  .sub-title {
    color: DarkCyan;}
  
  #info {
    display: flex;
    justify-content: space-between;}
    
  #info > div.right {
  text-align: right;
  border: 1px solid #000;
  border-color:MediumVioletRed;
  padding: 10px;
}
</style>

<div id="info"> 
  
  <div class="left">
    <p class="left-info"> Mosab Rezaei &nbsp - &nbsp Z1905541 </p>
  </div>
  
</div>`
)}

function _2(toc){return(
toc()
)}

function _3(htl){return(
htl.html`<h2 class= sub-title><br> 1. Introduction </h2>`
)}

function _4(md){return(
md`In this work, an analyzer tool has been proposed to express the performance of the player in the National Football League by data visualization techniques. By using the performance, we indicate some features extracted for each player. The features are Age, Weight, Height, Speed, Accelerate, and Stamina. They will be explained in more detail further.
 
The main questions that can be answered by the tool have been listed below:
1. <b>During the years from 2018 to 2020, is there any progress or retrogression in the performance of a certain player?</b><br>
For example, if the stamina of a player has an obvious retrogression, it means there is a problem here. Maybe the coach or a psychologist needs to speak with the player, or maybe the team trainer needs to change the routine training plan for the player. 

2. <b>What is the difference between the performance of the team players and the average of all players in the league?</b> <br>
The point here is that for any specific position in the game, the team analyzers can see in which feature their player are under the average of all teams in NLF. it will be useful for the future decision to hire new players in order to cover their current weaknesses.

3. <b>In addition to the searching by the player name, can we search for players in filtered list by their position?</b><br>
In addition to searching by the player name, can we search for players in the filtered list by their position?
Clearly searching through the list of all players in the NFL is time-consuming especially when we are not looking for a specific person but we are looking for a player with a specific feature. On the other hand, since each player belongs to a position in the game, it is more reasonable that we filter the list based on arbitrary positions.

4. <b>Can we compare the performance of two players with each other? </b><br>
Many scenarios show the benefits of this ability. For example, if a coach is looking for a player that is faster than player A, it can be done by selecting player A as well as player B and comparing their performance in one graph. As mentioned before players can be selected by searching through a list of all players or a filtered list based on their position. 


In orther to answer the above research question, the first step is creating the dataset. New dataset should have all six features for each player.`
)}

function _5(md){return(
md`<h2 class= sub-title><br> 2. Dataset </h2>
NFL Big Data Bowl 2022: https://www.kaggle.com/competitions/nfl-big-data-bowl-2022/data`
)}

function _6(md){return(
md`The dataset contains a wide variety of information related to the special teams in National Football League (NFL) games in 2018, 2019, and 2020 years. According to the above link, the dataset contains seven tables, which have been briefly described below.

1. <b>PFFScoutingData.csv</b> [Was Not Used] <br>
The table contains play-level scouting information for each game. For example, KickType column can have Kickoff or Punt Type values, or operationTime column express the timing from snap to kick on punt plays in seconds. 

2. <b>games.csv</b> [Was Not Used] <br>
This table reports the information of each game, like the Season, Game, and Date of the game.

3. <b>plays.csv</b> [Was Not Used] <br>
This table reports the information of each game, like the Season, Game, and Date of the game.

4. <b>players.csv</b><br>
The table contains the general information for each player in NFL. The following columns have been used in this work.<br>
<b>.</b> nflId: Unique ID number<br>
<b>.</b> displayName: Player Full Name<br>
<b>.</b> position: The position that players play<br>
<b>.</b> weight: The players' weight<br>
<b>.</b> height The players' height. In this work height converted to the feet.<br>
<b>.</b> birthDate: The date of the players' birthday. In this work it has been converted to the age<br>

5. <b>tracking2018-20.csv</b><br>
They are three different tables for each year, tracking2018, tracking2018, and tracking2018. In each table, the tracking data of each player has been recorded with 100 milliseconds accuracy, like direction, speed, and status.The following columns have been used in this work.
<b>.</b> s: Speed of each player in each moment. In this work we extracted the maximum speed of the player between all recorded speed.<br>
<b>.</b> dis: Distances that players travel during each moment in the play. In this work the distances have been accumulated for each game, then the average between all games has been returned as a Stamina feature for each player. <br>
<b>.</b> a: the acceleration of the players. Like speed, the maximum acceleration has been extracted for each player.<br>

All these preprocessing steps like, extracting tables, merging tables, converting the values, calculating new features, as well as removing null records have been done in python. The final preprocessed dataset has shown below.
By the way, in order to have a consistence Radar Char, all the values normalized here between 0 and 1 and assigned in the "data_normalized" variable.  
`
)}

function _7(__query,Orginal,invalidation){return(
__query(Orginal,{from:{table:"Orginal"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"Orginal")
)}

function _8(htl){return(
htl.html`<h2 class= sub-title> <br><br> 3. Analyser Tool </h2>`
)}

function _9(md){return(
md`In order to select any player, first of all, you need to extract the list of players based on their position. It will be done by clicking on the positions shown on the map. Also, you can find "All" in the downright of the map, which means all players will be extracted. After selecting the position, the below table will appear. The search box will search only in the extracted table. After that, you can select any player you want easily by using the table. Also, you can use the Range bar to change the players. <br>

As mentioned in the research questions, you can change the years with the radio bottom. Furthermore, you can show or hide the chart's average and second player lines by using the checkbox buttons. Also, to see the exact amount of the values for each feature on the Radar chart, you can hold the mouse pointer on the marker in each feature line to see the value by a tooltip box.


`
)}

function _search(Inputs,merged_selecteds){return(
Inputs.search(merged_selecteds, {label: "Search:"})
)}

function _table(Inputs,search){return(
Inputs.table(search)
)}

function _config(Inputs){return(
Inputs.checkbox(["Second Player", "Average"], {label: "Second Player:"})
)}

function _year(Inputs){return(
Inputs.radio(["2018", "2019", "2020"], {label: "Select the year:", value: "2018"})
)}

function _index(Inputs,table,data_normalized){return(
Inputs.range([0, 982], {step: 1, value:(table.length > 0) ? (data_normalized.find(row => row.nflId === table[0]["nflId"])[""]) : 0})
)}

function _15(html,data_normalized,index,htl){return(
htl.html`${html`${data_normalized[index]["name"]} &nbsp (${data_normalized[index]["position"]})</li>`}`
)}

function _year2(Inputs){return(
Inputs.radio(["2018", "2019", "2020"], {label: "Select the year:", value:"2018"})
)}

function _index2(Inputs,table,merged_selecteds){return(
Inputs.range([0, 982], {step: 1, value:(table.length > 1) ? (merged_selecteds.find(row => row.nflId === table[1]["nflId"])[""]) : 0})
)}

function _18(html,data_normalized,index2,htl){return(
htl.html`${html`${data_normalized[index2]["name"]} &nbsp (${data_normalized[index2]["position"]})</li>`}`
)}

function _19(d3,RadarChart,sampleData)
{
 var margin = { top: 100, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width,window.innerHeight - margin.top - margin.bottom - 20);

 var color = d3.scaleOrdinal().range(["#a8a8a7", "#00A0B0", "#CC333F"]);

  var radarChartOptions = {
    title: "Comparing Players Ability", 
    w: width,
    h: height,
    margin: margin,
    minValue: 0,
    maxValue: 1,
    levels: 5,
    roundStrokes: true,
    color: color
  };

  return RadarChart(sampleData, radarChartOptions);
}


function _20(htl){return(
htl.html`Sincerely please re-run the below cell after applying any changes in the below map:`
)}

function _merged_selecteds(merged_selecteds_func){return(
merged_selecteds_func()
)}

function _22(FileAttachment,html,d3,create_position)
{

  var offense_color = "#ed6f87"
  var deffense_color = "#7a8aff"
  var special_color = "#ebe975"
  
  const image = FileAttachment("Map.png").image()
  const svg = html`<svg id = "svg"></svg>`
  const container = d3.select(svg)
    	.attr("width",  700)
	    .attr("height", 350)

  //Map
  container.append("rect")
    .attr("fill","#69b064")
    .attr("x",0)
    .attr("y",0)
    .attr("width",  630)
	  .attr("height", 400)
  //out  
  container.append("rect")
    .attr("fill","#a1c9a5")
    .attr("x",630)
    .attr("y",0)
    .attr("width",  700)
	  .attr("height", 350)

  //line
  container.append("rect")
    .attr("fill","#4a4949")
    .attr("x",0)
    .attr("y",173)
    .attr("width",  630)
	  .attr("height", 4)

  container.append("text")
    .text("Deffense")
    .attr('font-size', 25)
    .attr('fill', '#5c62bf')
    .attr("stroke","#303252")
    .attr("x",10)
    .attr("y",25)

  container.append("text")
    .text("Offense")
    .attr('font-size', 25)
    .attr('fill', '#b53e4b')
    .attr("stroke","#73272f")
    .attr("x",10)
    .attr("y",340)

  // Offense
  create_position(container,315,210,"C",offense_color)
  create_position(container,250,210,"G",offense_color)
  create_position(container,380,210,"G",offense_color)
  create_position(container,185,210,"T",offense_color)
  create_position(container,445,210,"T",offense_color)
  create_position(container,60,210,"WR",offense_color)
  create_position(container,570,210,"WR",offense_color)
  create_position(container,478,260,"TE",offense_color)
  create_position(container,315,270,"QB",offense_color)
  create_position(container,360,310,"FB",offense_color)
  create_position(container,270,310,"RB",offense_color)
  
  // Defense
  create_position(container,315,140,"NT",deffense_color)
  create_position(container,250,140,"DT",deffense_color)
  create_position(container,380,140,"DT",deffense_color)
  create_position(container,185,140,"DE",deffense_color)
  create_position(container,445,140,"DE",deffense_color)
  create_position(container,60,140,"CB",deffense_color)
  create_position(container,570,140,"CB",deffense_color)
  create_position(container,250,80,"ILB",deffense_color)
  create_position(container,380,80,"ILB",deffense_color)
  create_position(container,140,90,"OLB",deffense_color)
  create_position(container,490,90,"OLB",deffense_color)
  create_position(container,315,80,"MLB",deffense_color)
  create_position(container,430,30,"SS",deffense_color)
  create_position(container,200,30,"FS",deffense_color)
  
  // Special
  create_position(container,665,30,"K",special_color)
  create_position(container,665,100,"LS",special_color)
  create_position(container,665,170,"P",special_color)

  //All position
  create_position(container,665,310,"All","#ad5c9e")

  return svg
}


function _23(htl){return(
htl.html`<h2 class= sub-title> <br><br> 4. Functions and Variables </h2>`
)}

function _24(md){return(
md`As has been shown above, the First visualization is a Radar chart, which uses the line as its Marks. This mark's channel is the point's length or height in a 1-D line for each feature. the main difference between the line chart and the Radar chart is that in the line chart, features' (attributes) lines are placed parallel, but in the Radar chart, the lowest part of the features lines have been concentrated at the center of a circle.<br>

The second visualization has been designed to show the location of each position. The mark here is a circle on a 2-D map, and its channels are the color as well as the textual label for each position. By the way, the circles here are clickable. Selecting each position filter the normalized dataset and return a subset of the player which play in the selected position.

`
)}

function _checkboxes(){return(
[]
)}

function _merged_selecteds_func(checkboxes,data_normalized,groupBy_position){return(
function merged_selecteds_func() {
  
  var merged_selecteds = []

  if (checkboxes.findIndex((x,i) => x === "All") != -1){
      merged_selecteds = data_normalized
  }
  else{  
      for (var i=0; i<checkboxes.length; i++){
          //console.log(checkboxes[i])
          merged_selecteds = merged_selecteds.concat(groupBy_position[checkboxes[i]])
      }
  }
  return merged_selecteds
}
)}

function _create_position(d3,checkboxes){return(
function create_position(container,x,y,label,color){
    container.append("circle")
        .attr("r",20)
        .attr("fill",color)
        .attr("stroke","black")
        .attr("cx",x)
        .attr("cy",y)    
        .on("click",function(){
             const target = d3.select(this)
             const currentColor = target.attr("fill")
             if (currentColor == color){
                target.attr("fill","lightgray")
                checkboxes.push(label)
             }
             else{
                target.attr("fill",color)
                for( var i = 0; i < checkboxes.length; i++)
                     if ( checkboxes[i] === label)    
                          checkboxes.splice(i, 1)
      }})
      
       container.append("text")
        .text(label)
        .attr('font-size', 17)
        .attr('fill', 'black')
        //.attr("stroke","lightgray")
        .attr("x",x-((label.length)*6))
        .attr("y",y+6)
      return container
}
)}

function _groupBy_position(groupBy,data_normalized){return(
groupBy(data_normalized, v => v.position)
)}

function _Min_Max(data){return(
function Min_Max(column){
  
  var min = Number.POSITIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;
  var tmp = 0;
  
  for (var i=data.length-1; i>=0; i--) 
  {
    tmp = parseFloat(data[i][column]);
    if (tmp < min) min = tmp;
    if (tmp > max) max = tmp;
  }
  
  return [min, max];
}
)}

function _RadarChart(d3,DOM){return(
function RadarChart(data, options) {
  /////////////////////////////////////////////////////////
  /////////////////// Helper Function /////////////////////
  /////////////////////////////////////////////////////////

  function autoBox() {
  document.body.appendChild(this);
  const {x, y, width, height} = this.getBBox();
  document.body.removeChild(this);
  return [x, y, width, height];
  }
  
  //Taken from http://bl.ocks.org/mbostock/7555321
  //Wraps SVG text
  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
        words = text
          .text()
          .split(/\s+/)
          .reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  } //wrap

  var cfg = {
    title: "Comparing Players Ability", //Title of the graph
    w: 600, //Width of the circle
    h: 600, //Height of the circle
    margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
    levels: 3, //How many levels or inner circles should there be drawn
    maxValue: 0, //What is the value that the biggest circle will represent
    minValue: 0,
    labelFactor: 1.2, //How much farther than the radius of the outer circle should the labels be placed
    wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
    opacityArea: 0.35, //The opacity of the area of the blob
    dotRadius: 2, //The size of the colored circles of each blog
    opacityCircles: 0.1, //The opacity of the circles of each blob
    strokeWidth: 3, //The width of the stroke around each blob
    roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
    color: d3.scaleOrdinal(d3.schemeCategory10) //Color function
  };

  //Put all of the options into a variable called cfg
  if ("undefined" !== typeof options) {
    for (var i in options) {
      if ("undefined" !== typeof options[i]) {
        cfg[i] = options[i];
      }
    } //for i
  } //if

  //If the supplied maxValue is smaller than the actual one, replace by the max in the data
  var maxValue = Math.max(
    cfg.maxValue,
    d3.max(data, function(i) {
      return Number(d3.max(
        i.map(function(o) {
          return o.value;
        })
      ).toFixed(2));
    })
  );

  var allAxis = data[0].map(function(i, j) {
      return i.axis;
    }), //Names of each axis
    total = allAxis.length, //The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2), //Radius of the outermost circle
    angleSlice = (Math.PI * 2) / total; //The width in radians of each "slice"

  //Scale for the radius
  var rScale = d3
    .scaleLinear()
    .range([0, radius])
    .domain([cfg.minValue, maxValue]);

  /////////////////////////////////////////////////////////
  //////////// Create the container SVG and g /////////////
  /////////////////////////////////////////////////////////

  //Calculate width and height
  var height = cfg.h + cfg.margin.top + cfg.margin.bottom;
  var width = cfg.w + cfg.margin.left + cfg.margin.right;

  //Initiate the radar chart SVG
  var svg = d3.select(DOM.svg(width, height)).attr("class", +new Date());

  //Append a g element
  var g = svg
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (cfg.w / 2 + cfg.margin.left) +
        "," +
        (cfg.h / 2 + cfg.margin.top) +
        ")"
    );

  /////////////////////////////////////////////////////////
  ////////// Glow filter for some extra pizzazz ///////////
  /////////////////////////////////////////////////////////

  //Filter for the outside glow
  var filter = g
      .append("defs")
      .append("filter")
      .attr("id", "glow"),
    feGaussianBlur = filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "0")
      .attr("result", "coloredBlur"),
    feMerge = filter.append("feMerge"),
    feMergeNode_1 = feMerge.append("feMergeNode").attr("in", "coloredBlur"),
    feMergeNode_2 = feMerge.append("feMergeNode").attr("in", "SourceGraphic");

  /////////////////////////////////////////////////////////
  /////////////// Draw the Circular grid //////////////////
  /////////////////////////////////////////////////////////

  //Wrapper for the grid & axes
  var axisGrid = g.append("g").attr("class", "axisWrapper");

  //Draw the background circles
  axisGrid
    .selectAll(".levels")
    .data(d3.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("circle")
    .attr("class", "gridCircle")
    .attr("r", function(d, i) {
      return (radius / cfg.levels) * d;
    })
    .style("fill", "#CDCDCD")
    .style("stroke", "#CDCDCD")
    .style("fill-opacity", cfg.opacityCircles)
    .style("filter", "url(#glow)");

  //Text indicating at what % each level is
  axisGrid
    .selectAll(".axisLabel")
    .data(d3.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("text")
    .attr("class", "axisLabel")
    .attr("x", 4)
    .attr("y", function(d) {
      return (-d * radius) / cfg.levels;
    })
    .attr("dy", "0.4em")
    .style("font-size", "10px")
    .attr("fill", "#737373")
    .text(function(d, i) {
      if (maxValue > 1) {
        return Math.ceil((maxValue * d) / cfg.levels);
      }
      return (maxValue * d) / cfg.levels;
    });

  /////////////////////////////////////////////////////////
  //////////////////// Draw the axes //////////////////////
  /////////////////////////////////////////////////////////

  //Create the straight lines radiating outward from the center
  var axis = axisGrid
    .selectAll(".axis")
    .data(allAxis)
    .enter()
    .append("g")
    .attr("class", "axis");

  //Append the lines
  axis
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", function(d, i) {
      return rScale(maxValue * 1.05) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("y2", function(d, i) {
      return rScale(maxValue * 1.05) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .attr("class", "line")
    .style("stroke", "#777777")
    .style("stroke-width", "0.6px");

  //Append the labels at each axis
  axis
    .append("text")
    .attr("class", "legend")
    .style("font-size", "11px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", function(d, i) {
      return (
        rScale(maxValue * cfg.labelFactor) *
        Math.cos(angleSlice * i - Math.PI / 2)
      );
    })
    .attr("y", function(d, i) {
      return (
        rScale(maxValue * cfg.labelFactor) *
        Math.sin(angleSlice * i - Math.PI / 2)
      );
    })
    .text(function(d) {
      return d;
    })
    .call(wrap, cfg.wrapWidth);

  /////////////////////////////////////////////////////////
  ///////////// Draw the radar chart blobs ////////////////
  /////////////////////////////////////////////////////////

  //The radial line function
  var radarLine = d3
    .lineRadial()
    .curve(d3.curveLinearClosed)
    .radius(function(d) {
      return rScale(d.value);
    })
    .angle(function(d, i) {
      return i * angleSlice;
    });

  if (cfg.roundStrokes) {
    radarLine.curve(d3.curveLinearClosed);
  }

  //Create a wrapper for the blobs
  var blobWrapper = g
    .selectAll(".radarWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarWrapper");

  //Create the outlines
  blobWrapper
    .append("path")
    .attr("class", "radarStroke")
    .attr("d", function(d, i) {
      return radarLine(d);
    })
    .style("stroke-width", cfg.strokeWidth + "px")
    .style("stroke", function(d, i) {
      return cfg.color(i);
    })
    .style("fill", "none")
    .style("filter", "url(#glow)");

  //Append the circles
  blobWrapper
    .selectAll(".radarCircle")
    .data(function(d, i) {
      return d;
    })
    .enter()
    .append("circle")
    .attr("class", "radarCircle")
    .attr("r", cfg.dotRadius)
    .attr("cx", function(d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("cy", function(d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .style("fill", function(d) {
      return "#737373";
    })
    .style("fill-opacity", 0.8);

  /////////////////////////////////////////////////////////
  //////// Append invisible circles for tooltip ///////////
  /////////////////////////////////////////////////////////

  //Wrapper for the invisible circles on top
  var blobCircleWrapper = g
    .selectAll(".radarCircleWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarCircleWrapper");

  //Append a set of invisible circles on top for the mouseover pop-up
  blobCircleWrapper
    .selectAll(".radarInvisibleCircle")
    .data(function(d, i) {
      return d;
    })
    .enter()
    .append("circle")
    .attr("class", "radarInvisibleCircle")
    .attr("r", cfg.dotRadius * 1.5)
    .attr("cx", function(d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("cy", function(d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", function(d, i) {
      var newX = parseFloat(d3.select(this).attr("cx")) - 10;
      var newY = parseFloat(d3.select(this).attr("cy")) - 10;

      tooltip
        .attr("x", newX)
        .attr("y", newY)
        .text(d.value)
        .transition()
        .duration(200)
        .style("opacity", 1);
    })
    .on("mouseout", function() {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0);
    });
  
  //Set up the small tooltip for when you hover over a circle
  var tooltip = g
    .append("text")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var title = g.append("text")
        .attr("x", 0)             
        .attr("y", -(cfg.h) / 1.55)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text(cfg.title);
  
  return svg.node();
}
)}

function _year_function(){return(
function year_function(y){
  var year_array = []
  if (y == "2018"){
     year_array.push("speed_2018")
     year_array.push("dis_2018")
     year_array.push("Acc_2018")
  } 
  else if (y == "2019"){
     year_array.push("speed_2019")
     year_array.push("dis_2019")
     year_array.push("Acc_2019") 
  }
  else{
     year_array.push("speed_2020")
     year_array.push("dis_2020")
     year_array.push("Acc_2020") 
  }
  return year_array
}
)}

function _sampleData(merged_selecteds,config,MeanFunction,year_function,year,data_normalized,index,index2,year2){return(
[[
  {
    axis: "Weight",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,"weight").toFixed(2)) : 0
  },
  {
    axis: "Age",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,"age").toFixed(2)) : 0
  },
  {
    axis: "Height",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,"height").toFixed(2)) : 0
  },
  {
    axis: "Speed",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,year_function(year)[0]).toFixed(2)) : 0
  },
  {
    axis: "Stamina",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,year_function(year)[1]).toFixed(2)) : 0
  },
  {
    axis: "Acceleration",
    value: merged_selecteds.length > 0 & config.findIndex((x,i) => x === "Average") != -1  ? Number(MeanFunction(merged_selecteds,year_function(year)[2]).toFixed(2)) : 0
  }
],
[
  {
    axis: "Weight",
    value: data_normalized[index]["weight"]
  },
  {
    axis: "Age",
    value: data_normalized[index]["age"]
  },
  {
    axis: "Height",
    value: data_normalized[index]["height"]
  },
  {
    axis: "Speed",
    value: data_normalized[index][year_function(year)[0]]
  },
  {
    axis: "Stamina",
    value: data_normalized[index][year_function(year)[1]]
  },
  {
    axis: "Acceleration",
    value: data_normalized[index][year_function(year)[2]]
  }
],
[
  {
    axis: "Weight",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2]["weight"] : 0
  },
  {
    axis: "Age",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2]["age"] : 0
  },
  {
    axis: "Height",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2]["height"] : 0
  },
  {
    axis: "Speed",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2][year_function(year2)[0]] : 0
  },
  {
    axis: "Stamina",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2][year_function(year2)[1]] : 0
  },
  {
    axis: "Acceleration",
    value: config.findIndex((x,i) => x === "Second Player") != -1 ? data_normalized[index2][year_function(year2)[2]] : 0
  }
]
]
)}

async function _Orginal(d3){return(
await d3.csv("https://raw.githubusercontent.com/mosab-rezaeri/Data-Visualization-Project/main/Dataset.csv")
)}

async function _data(d3){return(
await d3.csv("https://raw.githubusercontent.com/mosab-rezaeri/Data-Visualization-Project/main/Dataset.csv")
)}

function _groupBy(){return(
(x,f)=>x.reduce((a,b,i)=>((a[f(b,i,x)]||=[]).push(b),a),{})
)}

function _data_normalized(data,Min_Max)
{

  var data_normalized = data
  
  var columns = ["weight", "age", "height", "speed_2018", "speed_2019", "speed_2020", "dis_2018", "dis_2019", "dis_2020", "Acc_2018", "Acc_2019", "Acc_2020"]

  var c = 0;
  
  for (c = 0; c < columns.length; c++){
  
    var min_max = Min_Max(columns[c])
    var min = min_max[0];
    var max = min_max[1];
    var i = 0;
  
    for (i = 0; i < data_normalized.length; i++) {
       var norm = (parseFloat(data_normalized[i][columns[c]])-min)/(max-min);
       data_normalized[i][columns[c]] = Number(norm.toFixed(2));
    }
  }
  return data_normalized
}


function _MeanFunction(){return(
function MeanFunction (array, parameter) {
  let Avg = null;
  if (array && array.length > 0 && typeof parameter === 'string') {
    Avg = 0;
    for (let e of array) if (e && e.hasOwnProperty(parameter)) 
        Avg += e[parameter];
    Avg = Avg/array.length
  }
  return Avg;
}
)}

function _d3(require){return(
require("d3@5")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Map.png", {url: new URL("./files/4f8d8dec49414ae443506b1f3ddd8be87b1b23bb7f95cba354109418f4167cbc488312641c8742772a8655cbc42f151754c5d5b9af94c0809278604b4e68611f.png", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["htl"], _1);
  main.variable(observer()).define(["toc"], _2);
  main.variable(observer()).define(["htl"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["__query","Orginal","invalidation"], _7);
  main.variable(observer()).define(["htl"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("viewof search")).define("viewof search", ["Inputs","merged_selecteds"], _search);
  main.variable(observer("search")).define("search", ["Generators", "viewof search"], (G, _) => G.input(_));
  main.variable(observer("viewof table")).define("viewof table", ["Inputs","search"], _table);
  main.variable(observer("table")).define("table", ["Generators", "viewof table"], (G, _) => G.input(_));
  main.variable(observer("viewof config")).define("viewof config", ["Inputs"], _config);
  main.variable(observer("config")).define("config", ["Generators", "viewof config"], (G, _) => G.input(_));
  main.variable(observer("viewof year")).define("viewof year", ["Inputs"], _year);
  main.variable(observer("year")).define("year", ["Generators", "viewof year"], (G, _) => G.input(_));
  main.variable(observer("viewof index")).define("viewof index", ["Inputs","table","data_normalized"], _index);
  main.variable(observer("index")).define("index", ["Generators", "viewof index"], (G, _) => G.input(_));
  main.variable(observer()).define(["html","data_normalized","index","htl"], _15);
  main.variable(observer("viewof year2")).define("viewof year2", ["Inputs"], _year2);
  main.variable(observer("year2")).define("year2", ["Generators", "viewof year2"], (G, _) => G.input(_));
  main.variable(observer("viewof index2")).define("viewof index2", ["Inputs","table","merged_selecteds"], _index2);
  main.variable(observer("index2")).define("index2", ["Generators", "viewof index2"], (G, _) => G.input(_));
  main.variable(observer()).define(["html","data_normalized","index2","htl"], _18);
  main.variable(observer()).define(["d3","RadarChart","sampleData"], _19);
  main.variable(observer()).define(["htl"], _20);
  main.variable(observer("merged_selecteds")).define("merged_selecteds", ["merged_selecteds_func"], _merged_selecteds);
  main.variable(observer()).define(["FileAttachment","html","d3","create_position"], _22);
  main.variable(observer()).define(["htl"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer("checkboxes")).define("checkboxes", _checkboxes);
  main.variable(observer("merged_selecteds_func")).define("merged_selecteds_func", ["checkboxes","data_normalized","groupBy_position"], _merged_selecteds_func);
  main.variable(observer("create_position")).define("create_position", ["d3","checkboxes"], _create_position);
  main.variable(observer("groupBy_position")).define("groupBy_position", ["groupBy","data_normalized"], _groupBy_position);
  main.variable(observer("Min_Max")).define("Min_Max", ["data"], _Min_Max);
  main.variable(observer("RadarChart")).define("RadarChart", ["d3","DOM"], _RadarChart);
  main.variable(observer("year_function")).define("year_function", _year_function);
  main.variable(observer("sampleData")).define("sampleData", ["merged_selecteds","config","MeanFunction","year_function","year","data_normalized","index","index2","year2"], _sampleData);
  main.variable(observer("Orginal")).define("Orginal", ["d3"], _Orginal);
  main.variable(observer("data")).define("data", ["d3"], _data);
  main.variable(observer("groupBy")).define("groupBy", _groupBy);
  main.variable(observer("data_normalized")).define("data_normalized", ["data","Min_Max"], _data_normalized);
  main.variable(observer("MeanFunction")).define("MeanFunction", _MeanFunction);
  const child1 = runtime.module(define1);
  main.import("toc", child1);
  const child2 = runtime.module(define2);
  main.import("slider", child2);
  main.import("button", child2);
  main.import("select", child2);
  main.import("text", child2);
  main.import("radio", child2);
  main.import("checkbox", child2);
  main.import("number", child2);
  const child3 = runtime.module(define3);
  main.import("vl", child3);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
