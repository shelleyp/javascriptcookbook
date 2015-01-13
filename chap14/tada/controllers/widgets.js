var widgetDB = require('../model/widget.js').widgetDB;


// index listing of widgets at /widgets/
exports.index = function(req, res) {
   widgetDB.listWidgets(function(err, docs) {
      if (err) {
         res.send(err);
      } else {
         console.log(docs);
         res.render('widgets/index', {title : 'Widgets', widgets : docs});
      }
   });
};

// display new widget form
exports.new = function(req, res) {
    var filePath = require('path').normalize(__dirname + "/../public/widgets/new.html");
    res.sendFile(filePath);
};

// add a widget
exports.create = function(req, res) {

   var widget = {
     sn : req.body.widgetsn,
     name : req.body.widgetname,
     price : parseFloat(req.body.widgetprice),
     desc: req.body.widgetdesc};

     widgetDB.createWidget(widget, function(err,data) {
        if (err) {
           res.send(err);
        } else {
           console.log(data);
           res.render('widgets/added', {title: 'Widget Added', widget: widget});
        }
     });
};


// show a widget
exports.show = function(req, res) {
   var sn = req.params.sn;
   widgetDB.getWidget(sn, function(err,doc) {
      if (err)
         res.send('There is no widget with sn of ' + sn);
      else
         res.render('widgets/show', {title : 'Show Widget', widget : doc});
   });
};

// delete a widget
exports.destroy = function(req,res) {
    var sn = req.params.sn;
    widgetDB.deleteWidget(sn, function(err) {
      if (err) {
        res.send('There is no widget with sn of ' + sn);
      } else {
         console.log('deleted ' + sn);
         res.send('deleted ' + sn);
      }
   });

};


// display edit form
exports.edit = function(req, res) {
   console.log(req.params);
   var sn = req.params.sn;
   console.log(sn);
   widgetDB.getWidget(sn, function(err, doc) {
      console.log(doc);
      if(err)
         res.send('There is no widget with sn of ' + sn);
      else
        res.render('widgets/edit', {title : 'Edit Widget', widget : doc});
   });
};

// update a widget
exports.update = function(req,res) {
  var sn = req.params.sn;
  var widget = {
     sn : sn,
     name : req.body.widgetname,
     price : parseFloat(req.body.widgetprice),
     desc : req.body.widgetdesc};

  console.log(sn);
  console.log(widget);
  widgetDB.updateWidget(sn, widget, function(err) {
     if (err)
       res.send('Problem occured with update' + err)
     else
        res.render('widgets/added', {title: 'Widget Edited', widget : widget})
  });
};

