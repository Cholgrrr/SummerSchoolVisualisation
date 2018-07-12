INSERT INTO citydb.nrg8_usage_zone(id, objectclass_id, setpointtemp) 
VALUES((SELECT obj.id 
FROM citydb.cityobject as obj 
Where obj.gmlid = 'DEBW_0010000mzmm'
       Limit 1)
    ,26, '21')
ON Conflict(id) Do Update Set setpointtemp = '21';