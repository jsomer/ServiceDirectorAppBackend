var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('ProcessMaterials'); 
mobileApp.tables.add('ProcessTools'); 
mobileApp.tables.add('Customer'); 
mobileApp.tables.add('Process'); 
mobileApp.tables.add('ServiceItemService'); 
mobileApp.tables.add('ServiceOrder'); 
mobileApp.tables.add('User'); 
mobileApp.tables.add('ServiceItems'); 
mobileApp.tables.add('Service'); 
mobileApp.tables.add('Tool'); 
mobileApp.tables.add('Material'); 
mobileApp.tables.add('ServiceItem'); 
mobileApp.tables.add('Manufacturer'); 
app.listen(process.env.PORT || 3000);
