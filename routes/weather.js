const { Router } = require("express");
	const router = Router();
	

	const weatherDAO = require('../daos/weather');
	

	router.get("/", (req,res,next) => {
	    res.render('weather');
	});
	

	router.get("/location", async (req, res, next) => {
		const location = req.query.name;
	    if (!location) {
	       res.redirect('/weather');
	    }
	    
	     const weather = await weatherDAO.getWeather(location);
	     if (weather) {
	            res.render('location', { 
                    location : weather.name, 
                    temperature : weather.temperature 
                });
	     } else {
                res.status(404).render('unavailable', { 
                    name: location 
                });
	    }
	    
	});



module.exports = router;