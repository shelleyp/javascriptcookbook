var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create Widget model
var widgetSchema = new Schema({
  sn : {type: String, require: true, trim: true, unique: true},
  name : {type: String, required: true, trim: true},
  desc : String,
  price : Number
});

var Widget =  mongoose.model('Widget', widgetSchema);

exports.widgetDB = {
   createWidget: function (widget, callback) {

     var widgetObj = new Widget(widget);

     widgetObj.save( function(err, data) {
                 callback(err,data);
                 });

   },

   listWidgets: function (callback) {
      Widget.find({}, function (err, docs) {
           callback(err,docs);
      });
   },

   getWidget: function(sn, callback) {
      Widget.findOne({sn: sn}, function (err,doc) {
         console.log(err);
         callback(err, doc);
      });
   },

   deleteWidget: function(sn, callback) {
     Widget.remove({sn: sn}, function(err) {
        callback(err);
     });
   },

   updateWidget: function(sn, widget, callback) {
     Widget.update({sn: sn}, widget, function(err) {
       callback(err);
     });
   }
};

