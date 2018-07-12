INSERT INTO citydb.nrg8_usage_zone(id, objectclass_id, setpointtemp) 
VALUES((SELECT use.id 
FROM citydb.nrg8_usage_zone as use 
Inner Join citydb.cityobject as obj On use.id = obj.id Where obj.gmlid = 'DEBW_0010000mzmm')
    ,26, '21')
ON Conflict(id) Do Update Set setpointtemp = '21';