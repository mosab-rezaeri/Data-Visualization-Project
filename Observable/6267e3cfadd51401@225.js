function _1(htl){return(
htl.html`<style>
  .left-info {
    color: DarkCyan;}
  
  .right-info {
    color: MediumVioletRed; 
    font-style: italic;
    font-weight: normal;}

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
    <h1 class="left-info"> Mosab Rezaei </h1>
    <h3 class="left-info"> Z1905541 </h3>
  </div>
  
  <div class="right">
    <h3 class="right-info"> Data Visualization (CSCI 627/490)</h3>
    <h3 class="right-info"> Project &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2022-11-09 </h3>
  </div>
  
</div>`
)}

async function _data(d3){return(
await d3.csv("https://raw.githubusercontent.com/mosab-rezaeri/Data-Visualization-Project/main/Dataset.csv")
)}

async function _data_normalized(d3){return(
await d3.csv("https://raw.githubusercontent.com/mosab-rezaeri/Data-Visualization-Project/main/Dataset.csv")
)}

function _index(html){return(
html`<input type="range" id="decade" min="0" max="982" value="0" step="1"></input>`
)}

function _5(html,index,data_normalized,htl){return(
htl.html`${html`${index}: &nbsp ${data_normalized[index]["name"]} &nbsp (${data_normalized[index]["position"]})</li>`}`
)}

function _sampleRadarChart(htl,RadarChart,sampleData,d3)
{
  const width = 640;
  const height = Math.floor(width / 1.333);
  const svg = htl.svg`<svg width=${width} height=${height} viewbox="0 0 ${width} ${height}">`;

  const radarChart = new RadarChart(svg)
    .size(width, height)
    .data(sampleData)
    .field({ axis: "axis", value: "value" })
    // .angleOffset(-Math.PI / 2 + (2 * Math.PI) / 5)
    // .angleOffset(Math.PI / 4)
    .baselineValue(3)
    .curve(d3.curveLinearClosed)
    .margins(80)
    .render();

  return svg;
}


function _sampleData(data_normalized,index){return(
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
    value: data_normalized[index]["speed_2018"]
  },
  {
    axis: "Stamina",
    value: data_normalized[index]["dis_2018"]
  },
  {
    axis: "Acceleration",
    value: data_normalized[index]["Acc_2018"]
  }
]
)}

function _RadarChart(d3,palette,opacify,wrap){return(
class RadarChart {
  constructor(container) {
    this._container = d3.select(container);

    this._data = null;
    this._chartData = [];
    this._width = 640;
    this._height = 640;
    this._margins = {
      top: 60,
      right: 60,
      bottom: 60,
      left: 60
    };
    this._radius = 0;
    this._boundedRadius = 0;
    this._boundedWidth = 0;
    this._boundedHeight = 0;

    this._dotRadius = 5;
    this._baseAngleOffset = -0.5 * Math.PI;
    this._angleOffset = 0;

    this._axesLabels = new Set();
    this._labelWidth = 120;

    this._field = {
      axis: "axis",
      value: "value"
    };

    this._maxValue = 1;
    this._baselineValue = 0.1;
    this._bg = undefined;
    this._curve = d3.curveCardinalClosed;
    this._palette = palette;

    this._strokeDasharray = "2 2";
    this._fontFamily = "system-ui";

    this._axisAccessor = (d) => {
      return d[this._field.axis];
    };

    this._valueAccessor = (d) => {
      return d[this._field.value];
    };

    this._getCoordinatesForAngle = this._getCoordinatesForAngle.bind(this);
  }

  data(_) {
    return arguments.length ? ((this._data = _), this) : this._data;
  }

  field(_) {
    return arguments.length ? ((this._field = _), this) : this._field;
  }

  margins(_) {
    if (typeof _ === "number") {
      return (
        (this._margins = {
          top: _,
          right: _,
          bottom: _,
          left: _
        }),
        this
      );
    }
    return arguments.length ? ((this._margins = _), this) : this._margins;
  }

  palette(_) {
    return arguments.length ? ((this._palette = _), this) : this._palette;
  }

  curve(_) {
    return arguments.length ? ((this._curve = _), this) : this._curve;
  }

  fontFamily(_) {
    return arguments.length ? ((this._fontFamily = _), this) : this._fontFamily;
  }

  baselineValue(_) {
    return arguments.length
      ? ((this._baselineValue = _), this)
      : this._baselineValue;
  }

  angleOffset(_) {
    return arguments.length
      ? ((this._angleOffset = _), this)
      : this._angleOffset;
  }

  size(w, h) {
    return arguments.length
      ? ((this._width = w), (this._height = h), this)
      : this._field;
  }

  _radiusFromSize(w, h) {
    return Math.floor(Math.min(w, h) / 2);
  }

  _updateBounds() {
    this._boundedWidth =
      this._width - (this._margins.left + this._margins.right);
    this._boundedHeight =
      this._height - (this._margins.top + this._margins.top);

    this._radius = this._radiusFromSize(this._width, this._height);
    this._boundedRadius =
      this._radius -
      Math.max(
        this._margins.top + this._margins.bottom,
        this._margins.left + this._margins.right
      ) /
        2;

    this._bounds = this._container
      .append("g")
      .style(
        "transform",
        `translate(${this._margins.left + this._boundedWidth / 2}px, ${
          this._margins.top + this._boundedHeight / 2
        }px)`
      );

    // this._bounds
    //   .append("rect")
    //   .attr("width", this._boundedWidth)
    //   .attr("height", this._boundedHeight)
    //   .attr("x", -this._boundedRadius)
    //   .attr("y", -this._boundedRadius);
  }

  _getCoordinatesForAngle(angle, r = this._boundedRadius, offset = 1) {
    return [Math.cos(angle) * r * offset, Math.sin(angle) * r * offset];
  }

  _process() {
    this._chartData = [...this._data];
  }

  _init() {
    this._updateBounds();

    // Scales
    this._axesLabels = this._chartData.map(this._axisAccessor);

    const effectiveAngleOffset = this._baseAngleOffset + this._angleOffset;

    this._angleScale = d3
      .scaleBand()
      .domain(this._axesLabels)
      .range([effectiveAngleOffset, Math.PI * 2 + effectiveAngleOffset]);

    const maxValue = Math.max(
      this._maxValue,
      ...this._chartData.map(this._valueAccessor)
    );

    this._radiusScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, this._boundedRadius]);

    // Curves
    this._radarLine = d3
      .lineRadial()
      .curve(this._curve)
      .radius((d) => this._radiusScale(this._valueAccessor(d)))
      .angle((d) => Math.PI / 2 + this._angleScale(this._axisAccessor(d)));
  }

  _renderBg() {
    this._container
      .insert("rect", ":first-child")
      .attr("fill", this._palette.bg)
      .attr("width", this._width)
      .attr("height", this._height);
  }

  _renderAxis() {
    const peripherals = this._bounds.append("g").attr("class", "peripherals");

    // Add bg circles
    peripherals
      .append("circle")
      .attr("r", this._boundedRadius)
      .attr("fill", "white");
    peripherals
      .append("circle")
      .attr("r", this._boundedRadius)
      .attr("fill", opacify(this._palette.gridAccent, 0.075));
    peripherals
      .append("circle")
      .attr("r", this._radiusScale(this._baselineValue))
      .attr("fill", "white");

    // Add tick circles
    const ticks = this._radiusScale.ticks(5);
    ticks.forEach((r) => {
      if (!r) return;

      const tick = peripherals.append("g");

      tick
        .append("circle")
        .attr("class", "tick-circle")
        .attr("r", this._radiusScale(r))
        .attr("fill", "none")
        .attr("stroke", this._palette.grid)
        .attr("stroke-dasharray", this._strokeDasharray);
      const [_, max] = this._radiusScale.domain();

      if (r >= max) return; // Don't draw last tick label
      tick
        .append("text")
        .attr("x", 3)
        .attr("y", -this._radiusScale(r) - 4)
        .attr("class", "tick-label")
        .style("fill", opacify(this._palette.text, 0.5))
        .style("font-family", this._fontFamily)
        .style("font-size", "0.75rem")
        .text(r);
    });

    const getCoords = (d) => this._getCoordinatesForAngle(this._angleScale(d));

    // Add grid lines
    peripherals
      .selectAll("line")
      .data(this._axesLabels)
      .join("line")
      .attr("stroke-dasharray", this._strokeDasharray)
      .style("stroke", this._palette.grid)
      .each(function (d) {
        const [x2, y2] = getCoords(d);
        d3.select(this).attr("x2", x2).attr("y2", y2);
      });

    // Add Axis labels
    const labelRadiusScale = 1.1;
    const getCoordsForText = (d) =>
      this._getCoordinatesForAngle(
        this._angleScale(d),
        this._boundedRadius,
        labelRadiusScale
      );
    setTimeout(() => {
      peripherals
        .append("g")
        .attr("class", "axis-labels")
        .selectAll("text")
        .data(this._axesLabels)
        .join("text")
        .each(function (d) {
          const [x, y] = getCoordsForText(d);
          d3.select(this)
            .attr("x", x)
            .attr("y", y)
            .style(
              "text-anchor",
              Math.abs(x) < 5 ? "middle" : x > 0 ? "start" : "end"
            );
        })
        .text((d) => d)
        .style("fill", this._palette.text)
        .style("font-family", this._fontFamily)
        .style("font-size", "0.75rem")
        .style("dominant-baseline", "middle")
        .attr("dy", "0em")
        .call(wrap, this._labelWidth);
    });
  }

  _renderPlots() {
    const plots = this._bounds.append("g");

    const plot = plots.append("g");

    // Add curve
    plot
      .append("g")
      .attr("fill", opacify(this._palette.line, 0.15))
      .attr("stroke", this._palette.line)
      .append("path")
      .attr("d", () => this._radarLine(this._chartData));

    // Add dots
    const getCoordsForPlot = (d) =>
      this._getCoordinatesForAngle(
        this._angleScale(this._axisAccessor(d)),
        this._radiusScale(this._valueAccessor(d))
      );
    plot
      .append("g")
      .attr("fill", this._palette.dot)
      .selectAll("circle")
      .data(this._chartData)
      .join("circle")
      .attr("r", this._dotRadius)
      .each(function (d) {
        const [cx, cy] = getCoordsForPlot(d);
        d3.select(this).attr("cx", cx).attr("cy", cy);
      })
      .attr(
        "title",
        (d) => `${this._axisAccessor(d)}: ${this._valueAccessor(d)}`
      );
  }

  render() {
    this._process();
    this._init();
    this._renderBg();
    this._renderAxis();
    this._renderPlots();
    return this;
  }
}
)}

function _wrap(d3){return(
function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
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
}
)}

function _palette(){return(
{
  text: "#222",
  grid: "#d3d3d3",
  gridAccent: "#C8DA2B",
  dot: "#0099D8",
  line: "#6DCFF6",
  bg: "#f6f6f6"
}
)}

function _opacify(chroma){return(
(c, a) => chroma(c).alpha(a).hex()
)}

async function _chroma(){return(
(await import("https://cdn.skypack.dev/chroma-js@2.1.2?min")).default
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

function _14(Min_Max,data_normalized)
{
  var columns = ["weight", "age", "height", "speed_2018", "speed_2019", "speed_2020", "dis_2018", "dis_2019", "dis_2020", "Acc_2018", "Acc_2019", "Acc_2020"]

  var c = 0;
  
  for (c = 0; c < columns.length; c++){
  
    var min_max = Min_Max(columns[c])
    var min = min_max[0];
    var max = min_max[1];
    var i = 0;
  
    for (i = 0; i < data_normalized.length; i++) {
       var norm = (parseFloat(data_normalized[i][columns[c]])-min)/(max-min);
       data_normalized[i][columns[c]] = norm;
    }
  }
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["htl"], _1);
  main.variable(observer("data")).define("data", ["d3"], _data);
  main.variable(observer("data_normalized")).define("data_normalized", ["d3"], _data_normalized);
  main.variable(observer("viewof index")).define("viewof index", ["html"], _index);
  main.variable(observer("index")).define("index", ["Generators", "viewof index"], (G, _) => G.input(_));
  main.variable(observer()).define(["html","index","data_normalized","htl"], _5);
  main.variable(observer("sampleRadarChart")).define("sampleRadarChart", ["htl","RadarChart","sampleData","d3"], _sampleRadarChart);
  main.variable(observer("sampleData")).define("sampleData", ["data_normalized","index"], _sampleData);
  main.variable(observer("RadarChart")).define("RadarChart", ["d3","palette","opacify","wrap"], _RadarChart);
  main.variable(observer("wrap")).define("wrap", ["d3"], _wrap);
  main.variable(observer("palette")).define("palette", _palette);
  main.variable(observer("opacify")).define("opacify", ["chroma"], _opacify);
  main.variable(observer("chroma")).define("chroma", _chroma);
  main.variable(observer("Min_Max")).define("Min_Max", ["data"], _Min_Max);
  main.variable(observer()).define(["Min_Max","data_normalized"], _14);
  return main;
}
