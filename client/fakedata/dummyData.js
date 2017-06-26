var faker = require('faker');

var fs = require('fs');

faker.locale = "en_IND";

var relationalRecords = 10;
var totalRecords = 50;
var visitedWithRelation = ['Sister', 'Brother', 'Mother', 'Father', 'Friend']



function generateData() {
    var patients = [];
    var patientVisits = [];



    for (var id = 0; id < totalRecords; id++) {

        patients.push({
            "id": id,
            "salutation": faker.name.prefix(),
            "firstName": faker.name.firstName(),
            "middleName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "occupation": faker.name.suffix(),
            "emailAddress": faker.internet.email(),
            "contactNumber": faker.phone.phoneNumber(),
            "currentAddress": {
                "streetAddress": faker.address.streetAddress(),
                "citi": faker.address.city(),
                "state": faker.address.state(),
                "zipcode": faker.address.zipCode()
            }
        });
    }


    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    var patientVisitsId = 0;

    for (var id = 0; id < totalRecords; id++) {
        var i = 0;
        var rand = randomInt(1, 7);

        while (i < rand) {

            var visits = {
                "id": patientVisitsId++,
                "patientId": id,
                "visitedDate": faker.date.past(),
                "medicinesPrescribed": [],
                "visitedWithName": faker.name.firstName() + " " + faker.name.lastName(),
                "visitedWithRelation": visitedWithRelation[randomInt(0, 4)],
                "currentStatementOrSituation": faker.lorem.paragraphs()
            }

            var randMedicine = randomInt(1, 7);
            var medicinesPrescribedId = 0;

            while (medicinesPrescribedId < randMedicine) {

                visits.medicinesPrescribed.push({ medicineName: faker.commerce.productName() });
                medicinesPrescribedId++;
            }


            patientVisits.push(visits);
            i++;
        }
    }


    var str = JSON.stringify({ "patients": patients, "patientVisits": patientVisits });


    fs.writeFile('db.json', str, (err) => {
        console.log("Error in creating file: " + err);
    });
    return { "patients": patients, "patientVisits": patientVisits };
}

module.exports = generateData; 