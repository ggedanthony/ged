const Item = require('../models/items.model');


exports.create = function(req, res) {
	const new_item = new Item(req.body);

	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
	  res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Item.create(new_item, function(err, item) {
		  if(err)
			  res.send(err);
			  res.json({error:false,message:"Item added successfully!",data:item});
		});
	}
};

exports.findAll = function(req,res){
	Item.findAll(function(err,item){
		if(err)
			res.send(err);
			console.log('res', item);
			res.send(item)
	});
};

exports.findById = function(req,res){
	Item.findById(req.params.id, function(err,item){
		if(err)
			res.send(err);
			res.send(item)
	});
};

exports.update = function(req,res){
	if(req.body.constructor == Object && Object.keys(req.body).length === 0){
		res.status(400).send({error:true, message: 'Please provide all requred field'});
	}else{
		Item.update(req.params.id, new Item(req.body), function(err,item){
		if(err)
			res.send(err);
			res.json({error:false, message: 'Item successfully updated'});	
		})
	}
}

exports.delete = function(req,res){
	Item.delete(req.params.id, function(err,item){
		if(err)
			res.send(err);
			res.json({error:false, message: "Item successfully deleted"})
	})
}