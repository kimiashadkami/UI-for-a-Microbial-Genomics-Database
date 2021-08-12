console.log(d3);

function visualize(data){
  console.log(data);

  const vis_data = data;
  const width = 500;
  const height = 1000;
  const margin = {top: 100, bottom: 100, left: 100, right: 100};

  const svg = d3.select('#d3-container')
                .append('svg')
                .attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom)
                .attr('viewBox', [0, 0, width, height]);

  const x_scale = d3.scaleLinear()
                    .domain([0,40])
                    .range([margin.left, width - margin.right]);

  const y_scale = d3.scaleBand()
                    .domain(d3.range(vis_data.length))
                    .range([height - margin.bottom, margin.top])
                    .padding(0.1);

  //creating the bar chart
  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(vis_data)
    .join('rect')
      .attr('x', margin.left)
      .attr('y', (d, i) => y_scale(i))
      .attr('width', d => x_scale(d.value) - margin.left)
      .attr('height', y_scale.bandwidth())
      .attr('class', 'rectangle')
      .attr('data-toggle', 'tooltip')
      .attr('data-placement','right')
      .attr('title', (d, i) => vis_data[i].name + ": " + vis_data[i].value)


  //the x axis labels
  function xAxis(g){
    g.attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(x_scale).ticks(null, vis_data.format))
    .attr('font-size', '20px');
  }

  function yAxis(g){
    g.attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y_scale).tickFormat(i => vis_data[i].name))
    .attr('font-size', '20px');
  }

  svg.append('g').call(yAxis);
  svg.append('g').call(xAxis);
  svg.node();

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
}
