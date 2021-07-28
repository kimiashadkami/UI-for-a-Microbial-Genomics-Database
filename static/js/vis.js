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
d3.selectAll('.test')
  .selectAll('p')
  .data(DUMMY_DATA)
  .enter()
  .append('p')
  .text(data_point => data_point.value);
