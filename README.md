# react-with-tooltips
Add programmatic tooltips to your React component the easy way

This library makes it easier to add tooltips to a react component that requires multiple tooltips. This works very well for data visualizations like a bar chart for example, where you want a tooltip that changes to reflect the data in each bar your hover over. 

How to use it: 
Install it
Require it `import WithTooltips from 'react-with-tooltips`
Declare it, wherever you would normally use your component, instead use this 
```
YourChartComponentWithTooltips = WithTooltips(YourChartComponent)
<YourChartComponentWithTooltips yourNormalProps={yourNormalProps} />
```

How it works:
The react-with-tooltips library is a [Higher Order Component](https://facebook.github.io/react/docs/higher-order-components.html) . It uses just one global tooltip. It will wrap some state around your component that lets it change the content of the global tooltip. It uses [Immutable.js](https://facebook.github.io/immutable-js/) so that each time the tooltip content changes, it doesn't have to rerender your whole component, no performance loss required just for some tooltips!
