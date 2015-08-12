module.exports = plugin;


function plugin(){
return function(files,metalsmith,done){
 Object.keys(files).forEach(function(file){
	console.log(files[file]);
	})
done();
}
}
