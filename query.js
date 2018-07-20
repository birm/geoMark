db.polys.find(.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ .2, .2 ] } } } }))
