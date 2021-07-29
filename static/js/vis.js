console.log(d3);

const DUMMY_DATA = [
  {id: 'd1', name: 'A', value: 10},
  {id: 'd2', name: 'B', value: 30},
  {id: 'd3', name: 'C', value: 5},
  {id: 'd4', name: 'D', value: 20},
  {id: 'd5', name: 'E', value: 15},
  {id: 'd6', name: 'F', value: 7},
  {id: 'd7', name: 'G', value: 11},
  {id: 'd8', name: 'H', value: 33},
  {id: 'd9', name: 'I', value: 32},
  {id: 'd10', name: 'J', value: 32},
  {id: 'd11', name: 'K', value: 9},
  {id: 'd12', name: 'L', value: 14}
]

const width = 500;
const height = 500;
const margin = {top: 100, bottom: 100, left: 100, right: 100}

const svg = d3.select('#d3-container')
              .append('svg')
              .attr('width', width - margin.left - margin.right)
              .attr('heigh', height - margin.top - margin.bottom)
              .attr('viewBox', [0, 0, width, height]);

const x_scale = d3.scaleBand()
                  .domain(d3.range(DUMMY_DATA.length))
                  .range([margin.left, width - margin.right])
                  .padding(0.1);

const y_scale = d3.scaleLinear()
                  .domain([0,40])
                  .range([height - margin.bottom, margin.top]);

//creating the bar chart
svg
  .append('g')
  .attr('fill', 'royalblue')
  .selectAll('rect')
  .data(DUMMY_DATA)
  .join('rect')
    .attr('x', (d, i) => x_scale(i))
    .attr('y', (d) => y_scale(d.value))
    .attr('width', x_scale.bandwidth())
    .attr('height', d => y_scale(0) - y_scale(d.value));

//the x axis labels
function xAxis(g){
  g.attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).tickFormat(i => DUMMY_DATA[i].name))
  .attr('font-size', '20px')
}

function yAxis(g){
  g.attr('transform', `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y_scale).ticks(null, DUMMY_DATA.format))
  .attr('font-size', '20px')
}

svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();
