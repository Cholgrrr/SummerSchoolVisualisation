  
  // specify the id to position relative and the id of the legend
  var legend = new Legend("wrapper", "legend");
  // setTop or setBottom or setLeft or setRight
  legend.setRight("20px");
  legend.setBottom("60px");
  legend.setTitle("Heating Demand");
  legend.setSubtitle("[kWh/m2/yr]");
  legend.setEndnote("some text");
  legend.addEntry([100,149,237], "< 50");
  legend.addEntry([0,255,0], "50 - 100");
  legend.addEntry([255,255,0], "100 - 150");
  legend.addEntry([255,128,0], "150 - 200");
  legend.addEntry([255,0,0], "> 200");
  legend.addEntry([128,128,128], "Unvalid");
  legend.render();
  
  // hide and show after rendering
  legend.show();
  legend.hide();