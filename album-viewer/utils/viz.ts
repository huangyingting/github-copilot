import * as d3 from 'd3';

// load the data from a json file and create the d3 svg in the function
export function createViz() {
  d3.json('data.json').then(data => {
    const svg = d3.select('#viz')
      .append('svg')
      .attr('width', 800)
      .attr('height', 600);

    // create the svg
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 100 + 50)
      .attr('cy', 100)
      .attr('r', d => d)
      .attr('fill', 'red');
    
    // create the scales for the x and y axis
    // x-axis are the month series and y-axis show the numbers of album selled
    const xScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, 800])
      .padding(0.1);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([600, 0]);
    
    // create axes for the x and y axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // generate a line chart based on the albums sales data
    const line = d3.line()
      .x((d, i) => i * 100 + 50)
      .y(d => d)
      .curve(d3.curveMonotoneX);
      
    svg.append('path')
        .datum(data)
        .attr('d', line)
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
  });
}

