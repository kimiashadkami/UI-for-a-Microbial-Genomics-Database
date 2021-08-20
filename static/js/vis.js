console.log(d3);

function visualize_data(vis_data, num){

  var d;

  if(num>0){
    d = vis_data.slice(0,num);
  }
  else{
    d = vis_data;
  }

  const VIS_DATA = d;

  const width = 500;
  const height = VIS_DATA.length*25;
  const min_height = 1000;
  const margin = {top: 100, bottom: 100, left: 100, right: 100};

  const svg = d3.select('#my-svg')
                .attr('viewBox', [0, 0, width, height]);

  const x_scale = d3.scaleLinear()
                    .domain([0, VIS_DATA[0]['value']])
                    .range([margin.left, width - margin.right]);

  const y_scale = d3.scaleBand()
                    .domain(d3.range(VIS_DATA.length))
                    .range([height - margin.bottom, margin.top])
                    .padding(0.1);

  //creating the bar chart
  svg
    .append('g')
    .attr('fill', '#58A5F0')
    .selectAll('rect')
    .data(VIS_DATA)
    .join('rect')
      .attr('x', margin.left)
      .attr('y', (d, i) => y_scale(i))
      .attr('width', d => x_scale(d.value) - margin.left)
      .attr('height', y_scale.bandwidth())
      .attr('class', 'rectangle')
      .attr('data-toggle', 'tooltip')
      .attr('data-placement','right')
      .attr('title', (d, i) => VIS_DATA[i].name + ": " + VIS_DATA[i].value)


  //the x axis labels
  function xAxis(g){
    g.attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(x_scale).ticks(null, VIS_DATA.format))
    .attr('font-size', '50%')
    .selectAll('line')
    .attr('y2', '4');
  }

  function yAxis(g){
    g.attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y_scale).tickFormat(i => VIS_DATA[i].name))
    .attr('font-size', '50%')
    .selectAll('line')
    .attr('x2', '-4');
  }

  // .attr('text-overflow', 'ellipsis')
  // .attr('white-space', 'nowrap')
  // .attr('overflow', 'hidden')

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
  svg.node();
}

function visualize(data){

  console.log(data);

  const VIS_DATA_ALL = data;

  VIS_DATA_ALL.sort(
    function(g1, g2) {
      return (g2['value']) - (g1['value']);
    }
  );

  visualize_data(VIS_DATA_ALL, 20);

  $('#customSwitch1').removeAttr('disabled');

  //visualize_data(VIS_DATA_ALL, 0);

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
}
