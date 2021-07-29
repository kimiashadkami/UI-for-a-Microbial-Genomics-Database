console.log(d3);

const DUMMY_DATA = [
  {id: 'd1', value: 10, name: 'A'},
  {id: 'd2', value: 30, name: 'B'},
  {id: 'd3', value: 5, name: 'C'},
  {id: 'd4', value: 20, name: 'D'},
  {id: 'd5', value: 15, name: 'E'},
  {id: 'd6', value: 25, name: 'F'},
  {id: 'd7', value: 35, name: 'G'},
  {id: 'd8', value: 5, name: 'H'},
  {id: 'd9', value: 20, name: 'I'},
  {id: 'd10', value: 15, name: 'J'},
  {id: 'd11', value: 25, name: 'K'},
  {id: 'd12', value: 35, name: 'L'}
]

const x_scale = d3.scaleBand()
                  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.name))
                  .rangeRound([0,250])
                  .padding(0.1);
const y_scale = d3.scaleLinear().domain([0,40]).range([200,0]);

const bars = d3.select('.test')
               .selectAll('.bar')
               .data(DUMMY_DATA)
               .enter()
               .append('rect')
               .classed('bar', true)
               .attr('width', x_scale.bandwidth())
               .attr('height', data_point => 200 - y_scale(data_point.value))
               .attr('x', data => x_scale(data.name))
               .attr('y', data_point => y_scale(data_point.value));

setTimeout(() => {
  bars.data(DUMMY_DATA.slice(0,2).exit().remove())
  }, 2000)
