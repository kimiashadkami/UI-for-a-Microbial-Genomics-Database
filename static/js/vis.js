console.log(d3);

const DUMMY_DATA = [
  {id: 'd1', value: 10, name: 'A'},
  {id: 'd1', value: 30, name: 'B'},
  {id: 'd1', value: 5, name: 'C'},
  {id: 'd1', value: 20, name: 'D'},
  {id: 'd1', value: 15, name: 'E'},
  {id: 'd1', value: 25, name: 'F'},
  {id: 'd1', value: 35, name: 'G'},
]

const bars = d3.select('.test')
               .selectAll('.bar')
               .data(DUMMY_DATA)
               .enter()
               .append('div')
               .classed('bar', true)
               .style('width', '50px')
               .style('height', data_point => data_point.value + 'px')
               .style('margin-left', '5px');
